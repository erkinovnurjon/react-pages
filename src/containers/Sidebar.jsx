import "./sidebar.scss";
import Logo from '../assets/images/icons/logo.svg';
import SidebarBtn from "../componenets/SidebarBtn";
import {Chart,Tickets,Ideas,Agents,Contacts,Articles,Settings,Subscription} from "../assets/icon";


const Sidebar = () => {
      return(
           <div className="Sidebar">
            <div className="header">
              <img src={Logo} alt="Dashboard Logo" />   <span> Dashboard Kit</span> 
            </div>
            

            <SidebarBtn img={<Chart />} title="Overview"/>
            <SidebarBtn img={<Tickets />} title="Tickets"/>
            <SidebarBtn img={<Ideas />} title="Ideas"/>
            <SidebarBtn img={<Contacts />} title="Contacts"/>
            <SidebarBtn img={<Agents />} title="Agents"/>
            <SidebarBtn img={<Articles />} title="Articles"/>
            <SidebarBtn img={<Settings />} title="Settings"/>
            <SidebarBtn img={<Subscription />} title="Subscription"/>
            </div>
          
           
      )
}
export default Sidebar ;