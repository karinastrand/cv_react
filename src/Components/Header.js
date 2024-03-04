import './Header.css';

    
function Header()
{
    return(
        <div>
                <div classname= "name">
                    KARIN<br/>
                    ÅSTRAND<br/>
                    <item style="font-size:12px">Programmerare</item>
                </div>
                <div classname ="contact">
                  <div>
                    <i class="fa fa-map-marker">
                        <item style="font-size: 12px;">Prostgatan 13 283 41 Osby</item>
                    </i>
                  </div>
                  <div>
                    <i classname="fa fa-phone">
                       <item style="font-size: 12px;">0763-42 84 25</item>
                    </i>                 
                  </div>
                  <div>
                    <i classname="fa fa-envelope">
                        <item style="font-size: 12px;">karinastrand@yahoo.se</item>
                    </i>              
                  </div>
                </div>
                    
        </div>

    );
    
}
export default Header;