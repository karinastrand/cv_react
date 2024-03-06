import "./ExperienceText.css"
import TextWithLines from "./TextWithLines"

function ExperienceText(props)
{
    
   return ( 
 

        <div className="text">
            {props.title4}<br/>
            <item className="textitem">
                <TextWithLines text={props.text} />
            </item>
            <br/>
        </div>
    );
    
}
export default ExperienceText;