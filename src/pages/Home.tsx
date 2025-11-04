import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/chat');
  }
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <h1><img src={logo} alt="logo" className="w-25 h-25" /><span className="hidden">Logo</span></h1>
        <div className="flex flex-col text-center">
          <p className="text-lg text-black"><strong>ZeeBot</strong>에게 물어보세요!</p>
          <span className="text-xs text-gray-400">궁금한 점이 있나요?<br />ZeeBot이 바로 알려드릴게요.</span>
        </div>
      </div>
      <Button className="w-full text-xl font-semibold h-10 bg-point text-primary cursor-pointer hover:bg-point/80" onClick={handleStart}>Start</Button>
    </div>
  );
}