import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="py-5 px-6">
      <div className="flex justify-center items-center">
        <h1><img src={logo} alt="logo" className="w-25 h-25" /></h1>
      </div>
      <Button className="w-full text-xl font-semibold h-10 bg-point text-primary">Start</Button>
    </div>
  );
}