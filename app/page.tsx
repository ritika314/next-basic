import CreateUser from "@/components/homeComponents/CreateUser";
import Loops from "@/components/homeComponents/Loops";


export default function Home() {
  return (
    <>
    <CreateUser />
    <hr className="my-20" />
  
    <Loops/>
    </>
  );
}
