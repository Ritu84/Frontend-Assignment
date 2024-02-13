import java from "../images/java.png"
import database from "../images/database.png"
import db from "../images/db.png"
import library from "../images/library.png"

const Courses = () => {
  return (
    <div className="bg-[#F5F6F7] scr">
      <div className=" flex  items-center flex-col pt-[20px] h-[635px]">
       <h1 className="text-[20px] text-[#1B1B32] font-semibold ">Welcome  to  freeCodeCamp.org</h1>
       <p className="text-[18px] text-[#1B1B32] pt-[30px]">&quot;I have not failed. I&apos;ve just found 10,000 ways <br/> </p>
       <p>that won&apos;t work&quot;</p>
       <h4>- Thomas A. Edison</h4>

       <div className="flex flex-col gap-[10px] mt-5">
        <p className="border-[2px] border-black bg-[#D0D0D5] p-[10px] w-[450px] h-[50px] cursor-pointer">💻 (New) Responsive Web Design Certification (300 hours)</p>
        <p className="border-[2px] border-black bg-[#D0D0D5] p-[10px] w-[450px] cursor-pointer">💻 Legacy Responsive Web Design Certification (300 hours)</p>
        <p className="border-[2px] border-black bg-[#D0D0D5] p-[10px] w-[450px] cursor-pointer flex items-center" ><img src={java} alt="error"  className="mr-2"/>JavaScript Algorithms and Data Structures Certification  </p>
        <p className="border-[2px] border-black bg-[#D0D0D5] p-[10px] w-[450px] cursor-pointer flex items-center"><img src={library} alt="error"  className="mr-2"/>Front End Development Libraries Certification </p>
        <p className="border-[2px] border-black bg-[#D0D0D5] p-[10px] w-[450px] cursor-pointer flex items-center"><img src={db} alt="error"  className="mr-2"/>Data Visualization Certification (300 hours)</p>
        <p className="border-[2px] border-black bg-[#D0D0D5] p-[10px] w-[450px] cursor-pointer flex items-center"><img src={database} alt="error"  className="mr-2"/> Back End Development and API&apos;s Certification </p>
        <p className="border-[2px] border-black bg-[#D0D0D5] p-[10px] w-[450px] cursor-pointer ">📋 Quality Assurance Certification (300 hours)</p>
       </div>

    </div>
    </div>
  )
}

export default Courses