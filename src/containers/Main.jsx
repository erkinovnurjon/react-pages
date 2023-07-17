import { Mainone, NAvfilter, Navsort } from "../assets/icon";
import MainDiv from "../componenets/MainDiv";
import "./main.scss"
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
                        <MainDiv image={<Mainone/>}/>

                  </div>

            </div>
      )
}
export default Main;