import "./LeftSide.css";
import img from "../Image/photo.jpg";
import LeftSide1 from "./LeftSide1.js";
import LeftSide2 from "./LeftSide2.js";
import LeftSide3 from "./LeftSide3.js";
import Competense from "./Competense.js";
import LeftSide4 from "./LeftSide4.js";
function LeftSide()
{
    return(
        <div className="LeftSideBox" >
             <img src={img} alt="me"></img>
             <LeftSide1 />
             <LeftSide2/>
             <LeftSide3/>
             <Competense/>
             <LeftSide4/>
        </div>
       

    );
}
export default LeftSide;