import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'


const Navbar = () => {


  return (
    <div className="main bg-[#0A0A23] flex items-center justify-between">
        <input type="text" placeholder="🔍   Search 9000+ tutorials" className="bg-[#3B3B4F] text-white mx-[15px] my-[10px] w-3/12 p-[4px]" />
        <div className='mr-[230px]'>
            <img src={logo} className=' h-[30px] w-fit' alt="fcc-logo" />
        </div>
        <div className='flex gap-[10px] px-[10px]'>
            <button className='cursor-pointer bg-[#0A0A23] text-white border-[1px] my-[10px] px-[14px] py-[5px]'>Menu</button>
            <Link to="/SignIn" className='cursor-pointer text-[#0A0A23] bg-[#FFBC3F] my-[10px] px-[14px] py-[5px]' >Sign In</Link>
        </div>
    </div>
  )
}
export default Navbar