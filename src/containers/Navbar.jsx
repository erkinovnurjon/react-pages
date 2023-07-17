import "./navbar.scss";

import Search from '../assets/images/icons/search.svg';
import New from '../assets/images/icons/new.svg';
import Person from '../assets/images/icons/m header.png';
import { Line } from "../assets/icon";

const Navbar = () => {
      return(
           <div className="Navbar">
            <div className="nav__left">
                  <div className="right">

                  <h1>Tickets</h1>
                  </div>
                  <div className="left">
                        <img src={Search} alt="Navbar-Search" />
                        <img src={New} alt="Navbar-new" />
                        <Line/>
                  </div>
            </div>
            <div className="nav__right">
                  
                  <span>Jonas Ferdinand</span> <img src={Person} alt="Navbar-Person" />
                  
            </div>

           </div>
      )
}
export default Navbar;