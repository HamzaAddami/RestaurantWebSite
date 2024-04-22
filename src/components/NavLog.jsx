import { useNavigate } from "react-router-dom";
import { SiCodechef } from "react-icons/si";
import { RxExit } from "react-icons/rx";
import {Link} from 'react-scroll';

function NavLog(){
    const navigate = useNavigate();
    return(
        <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              onClick={() => navigate("/home")}
              className="flex flex-start"
              >
            <div 
            className=" flex flex-row justifey-between cursor-pointer pt-5 " 
            
            
            >
              <span>
                <SiCodechef size={32} color="white" />
              </span>
              <h1 className=" relative ml-2 top-1.5 text-2xl text-brightColor font-bold " id="beloved" >A&K FooD</h1>
              
            </div>  
            <div>
            <RxExit size={35} color="white" className="pt-2"/>
            </div>
          </Link>
    )
}
export default NavLog;