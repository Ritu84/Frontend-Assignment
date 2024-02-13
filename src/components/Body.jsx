import apple from "../images/apple.png"
import google from "../images/google.png"
import microsoft from "../images/microsoft.png"
import spotify from "../images/spotify.png"
import amazon from "../images/amazon.png"
import {Link} from 'react-router-dom'


const Body = () => {
  return (
    <div className="bg-[#F5F6F7] w-full pt-[80px] h-[650px]">
      <div className="main-body  flex flex-col  gap-[40px] w-6/12 mx-auto">
        <h1 className=" text-[40px] font-bold leading-[80px] text-[#1B1B32]">Learn to code — for free. <br/>Build projects.<br/> Earn certifications.</h1>
        <div className="flex flex-col gap-[30px]">
        <p className="text-[20px] text-[#1B1B32] font-semibold ">Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten <br/> jobs at tech companies including:</p>
        <div className="flex gap-[100px] ">
          <img src={apple} className="h-[30px]" alt="error" />
          <img src={google} className="h-[30px]" alt="error" />
          <img src={microsoft} className="h-[30px]" alt="error" />
          <img src={spotify} className="h-[30px]" alt="error" />
          <img src={amazon} className="h-[30px]" alt="error" />
        </div>
        <Link to="/Courses" className="bg-[#FFB036] hover:bg-[#FECC4C] text-[30px] text-[#1B1B32] border-[1px] px-[14px] py-[5px] w-[500px] mt-[25px] ml-[50px] flex items-center justify-center">
          Get started (it&apos;s free)
        </Link>
        </div>
    </div>
    </div>
  )
}

export default Body