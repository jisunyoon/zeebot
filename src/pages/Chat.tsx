import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ArrowLeftIcon, ArrowUpIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
//import ChatList from "@/components/ChatList"
import { sendMessage, Message } from "@/lib/api";
import { useState } from "react";
import ChatList from "@/components/ChatList";

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const handleGoBack = () =>{navigate(-1);}


    const handleSendMessage = async () => {
        if(!input.trim()) return;

        try{
            const newMessage: Message = {
                role: 'user',
                content: input,
                createAt: new Date().toISOString(),
            }
            setMessages( prev => [...prev, newMessage]);

            setInput('');
            setIsLoading(true);

            const aiReply = await sendMessage([...messages, newMessage]);
            
            setMessages( prev => [...prev, {
                role:'assistant',
                content: aiReply,
                createAt: new Date().toISOString(),
            }])
            
            setIsLoading(false);
            
        }catch(error){
            console.error('AI 메시지 전송 실패', error);
            setIsLoading(false);
        }
    }
  
    const enterSendMessage = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            handleSendMessage();
        }
    };

    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('ko-KR', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true
        })
    }

    return(
        <div className="h-full flex flex-col gap-4">
            <div className="flex items-center">
                <Button className="p-0 hover:bg-transparent cursor-pointer" variant="ghost" onClick={handleGoBack}>
                    <ArrowLeftIcon className="!w-8 !h-8" />
                </Button>
                <h1 className="m-auto font-bold text-lg">ZeeBot</h1>
            </div>
            <div className="flex-1 overflow-y-auto my-10">
                <ChatList 
                    sender="system" 
                    message="안녕하세요! ZeeBot입니다." 
                    createdAt={formatTime(new Date().toISOString())} 
                />
                {messages.map((message, index) => (
                    <ChatList 
                        key={index}
                        sender={message.role}
                        message={message.content} 
                        createdAt={formatTime(message.createAt || new Date().toISOString())}
                    />
                ))}
                {isLoading && (
                   <p className="text-sm text-gray-400">작성중...</p>
                )}
            </div>
            <div className="border border-gray-300 rounded-md p-1 flex items-center gap-2 mt-auto">
                <Input 
                    className="w-full h-10 border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0" 
                    placeholder="메시지를 입력하세요."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={enterSendMessage}
                />
                <Button 
                    onClick={handleSendMessage}
                    className="cursor-pointer w-8 h-8 bg-point hover:bg-point/80 cursor-pointer rounded-full shadow-none focus-visible:ring-0 focus-visible:ring-offset-0" 
                >
                    <ArrowUpIcon className="!w-6 !h-6 text-primary" />
                </Button>
            </div>
        </div>
    )
}