import './Header.css';
import Name from "./Name.js";
import Contacts from "./Contacts.js";
function Header()
{
    return(
        <div className='header'>
                <Name />
                <Contacts />
        </div>

    );
    
}
export default Header;