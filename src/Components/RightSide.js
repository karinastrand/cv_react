import "./RightSide.css";
import Header from "./Header.js";  
import Experience from "./Experience.js";
import Competence from "./Competense.js";
function RightSide()
{
    return(
        <div className="RightSideBox">
        <Header />
        <Experience />
        <Competence />
        </div>
    );
    
}
export default RightSide;