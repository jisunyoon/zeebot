import logo from "@/assets/logo.svg";

interface ChatListProps{
    sender: 'user' | 'system' | 'assistant';
    message: string;
    createdAt: string;
}

export default function ChatList({
    sender,
    message,
    createdAt,
}: ChatListProps) {
    return(
        <>
            {sender === 'system'  || sender === 'assistant' ? (
                <>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="user" className="w-10 h-10" />
                        <span className="text-medium font-bold">ZeeBot</span>
                    </div>
                    <p className="text-sm bg-gray-200 rounded-md rounded-tl-none px-2 py-1 text-primary inline-block mt-2">{message}</p>
                    <p className="text-[11px] text-gray-400 mx-2">{createdAt}</p>
                </>
            ):(
                <div className="text-right">
                    <p className="text-sm bg-primary rounded-md rounded-tr-none px-2 py-1 text-white inline-block mt-2">{message}</p>
                    <p className="text-[11px] text-gray-400 mx-2">{createdAt}</p>
                </div>
            )}
        </>
    )
}