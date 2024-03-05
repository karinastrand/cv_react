import "./RightSide.css";
import Header from "./Header.js";  
import Experience from "./Experience.js";
import Education from "./Education.js";
import Competence from "./Competense";
function RightSide()
{
    return(
        <div className="RightSideBox">
        <Header />;
        <Experience />;
        <Education />;
        <Competence />;  
        </div>
    );
    
}
export default RightSide;