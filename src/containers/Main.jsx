import { Mainone, NAvfilter, Navsort } from "../assets/icon";
import MainDiv from "../componenets/MainDiv";
import "./main.scss";

const Main = () => {
      return (
            <div className="container">
                  <div className="conten">

                    <div className="main">
                        <div className="main__left">
                             <h1>All Ticktes</h1>

                         </div>
                        <div className="main__right">
                               <span>Sort</span> <Navsort/>
                        <span>Filter</span> <NAvfilter/>


                   </div>
                   </div>
                        <div className="main__bottom">
                          <div className="b__left">
                              <span>Ticket details</span>
                          </div>
                          <div className="b__right">
                             <span>Customer name</span>
                             <span>Date</span>
                             <span>Priority</span>
                          </div>
                        </div>
                        <MainDiv  image={<Mainone/>} contact="Contact Email not Linked" contactp="Updated 1 day ago" name="Tom Cruise" nameon="on 24.05.2019"  date="May 26, 2019" dateon="6:30 PM" button="High"/>

                        <MainDiv  image={<Mainone/>} contact="Adding Images to Featured Posts" contactp="Updated 1 day ago" name="Matt Damon" nameon="on 24.05.2019"  date="May 26, 2019" dateon="6:00 AM" button="Low"/>
                        <MainDiv  image={<Mainone/>} contact="When will I be charged this month?" contactp="Updated 1 day ago" name="Robert Downey" nameon="oon 24.05.2019"  date="May 26, 2019" dateon="7:30 PM" button="High"/>
                        <MainDiv  image={<Mainone/>} contact="Payment not going through" contactp="Updated 2 days ago" name="Christian Bale" nameon="on 24.05.2019"  date="May 25, 2019" dateon="4:00 PM" button="High"/>
                        <MainDiv  image={<Mainone/>} contact="Unable to add replies" contactp="Updated 1 day ago" name="Unable to add replies" nameon="on 24.05.2019"  date="May 26, 2019" dateon="6:00 AM" button="High"/>
                        <MainDiv  image={<Mainone/>} contact="Downtime since last week" contactp="Updated 3 day ago" name="Chris Evans" nameon="on 23.05.2019"  date="May 26, 2019" dateon="2:00 PM" button="Normal"/>
                        <MainDiv  image={<Mainone/>} contact="Referral Bonus" contactp="Updated 4 day ago" name="Sam Smith" nameon="on 24.05.2019"  date="May 26, 2019" dateon="11:30 AM" button="Low"/>
                        <MainDiv  image={<Mainone/>} contact="How do I change my password?" contactp="Updated 6 day ago" name="Steve Rogers" nameon="on 24.05.2019"  date="May 24, 2019" dateon="1:00 PM" button="Normal"/>
                        


                  </div>

            </div>
      )
}
export default Main;