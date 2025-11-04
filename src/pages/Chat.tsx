import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import logo from "@/assets/logo.svg";
import { ArrowLeftIcon, ArrowUpIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Chat() {
    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
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
                <div>
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="user" className="w-10 h-10" />
                        <span className="text-medium font-bold">ZeeBot</span>
                    </div>
                    <p className="text-sm bg-gray-200 rounded-md rounded-tl-none px-2 py-1 text-primary inline-block mt-2">2025-01-01 12:00:00</p>
                </div>
                <div className="text-right">
                    <p className="text-sm bg-primary rounded-md rounded-tr-none px-2 py-1 text-white inline-block mt-2">2025-01-01 12:00:00</p>
                </div>
            </div>
            <div className="border border-gray-300 rounded-md p-1 flex items-center gap-2 mt-auto">
                <Input className="w-full h-10 border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0" />
                <Button className="cursor-pointer w-8 h-8 bg-point hover:bg-point/80 cursor-pointer rounded-full shadow-none focus-visible:ring-0 focus-visible:ring-offset-0">
                    <ArrowUpIcon className="!w-6 !h-6 text-primary" />
                </Button>
            </div>
        </div>
    )
}