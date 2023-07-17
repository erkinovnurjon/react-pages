import "../containers/main.scss"
import Personone from "../assets/images/icons/m 5.png";
import "../containers/main.scss"
const MainDiv = ({image,contact,contactp,name,nameon,date,dateon,button}) => {
      return (
            <div className="user">
                  <div className="user__left">

                  <img src={Personone} alt="person" />
                  <span className="headingg"> <h3>{contact}</h3>
                  <p className="gray">{contactp}</p>
                  </span>
                  </div>
                  <div className="user__right">

                  <div className="r_leftt">
                  <span><h3 className="headingg">{name}</h3> <p className="gray">{nameon}</p></span>
                  <span><h3 className="headingg">{date}</h3>  <p className="gray">{dateon}</p></span>
                  </div>

                 <div className="r__rightt">
                 <button className="bnt btn-success">{button}</button>
                  <span>{image}</span>
                 </div>
                  </div>


            </div>
      )
}
export default MainDiv;