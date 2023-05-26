import { Link } from "react-router-dom";
import grotubeLogo from "../assets/grotubeLogo.svg";

const Navbar = () =>(
    <div className="w-full flex justify-center bg-white">
    <Link to="/" className="flex items-center"> 
        <img src={grotubeLogo} className="w-22 h-14 p-2" alt="logo" />
        {/* <p className="text-2xl text-black"> Grotube</p> */}
    </Link>
    </div>
  )

export default Navbar
