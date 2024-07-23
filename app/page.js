import Image from "next/image";
import Logo from "../public/LOGO.png"
import heroimg from "../public/hero.png"
export default function Home() {
  return (
    <>
      <nav className="w-[100%] flex h-[100px] justify-between font-mono " >
        <div className="w-[150px] pr-10 h-[70px] ml-7 mt-2">
           <Image className="w-[100%] h-[100%]" src={Logo}></Image>
        </div>
        <div>
             <ul className="flex mt-[30px] text-blue-900 font-semibold text-xl"> 
                 <li className="mr-[30px]">Home</li>
                 <li className="mr-[30px]">About us</li>
                 <li className="mr-[30px]">Contact us</li>
                 <li className="mr-[30px]" >Portfolio</li>
                 <li className="mr-[30px]">Team</li>
                 <li className="mr-[110px]" >Services</li>
                 <li><button className="bg-blue-700 text-white w-fit h-fit pt-[7px] pb-[7px] rounded-lg text-sm pl-3 pr-3 mr-[100px] mt-[-5px] ">Get In Touch</button></li>
             </ul>
        </div>
      </nav>
      <div className="body flex">
             <div className="firs flex-col w-[50%] h-fit pl-[120px]">
                 <h1 className="text-5xl font-semibold text-blue-900 mt-[200px]">We Offer modern solutions <br /> for growing your business</h1>
                 <span className="text-[17px]">We are team of talented designers making websites for your business</span>
                 <div><button className="mt-[30px] w-fit text-white h-fit bg-blue-700 rounded-md pl-8 pr-8 pt-[8px] pb-[8px]">We Offer</button></div>
             </div>
             <div className="second  w-[40%] h-fit pt-[100px]"><Image src={heroimg} /></div>

      </div>
    </>
  );
}
