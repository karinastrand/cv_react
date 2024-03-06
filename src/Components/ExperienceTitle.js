import "./ExperienceTitle.css"
function ExperienceTitle(props)
{
    return(
        <div className="title">
            
            {props.title1}<br/>
            <item>{props.title2}<br/></item>
            <item>{props.title3}</item>
        </div>
    );
}
export default ExperienceTitle;