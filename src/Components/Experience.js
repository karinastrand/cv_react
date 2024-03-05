import './Experience.css';
import ExperienceTitle from "./ExperienceTitle.js"
import ExperienceText from "./ExperienceText.js";
function Experience()
{
    return(
        <div >
            
           
            <hr/>
                <h4>ARBETSLIVSERFARENHET</h4>
                
            <div className='experience'>
                <ExperienceTitle/>
                <ExperienceText/>
            </div>
        </div>

    );

    }
export default Experience;
