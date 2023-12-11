import {FaSimCard } from "react-icons/fa";
import { FaPortrait } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import {TbMathGreater} from "react-icons/tb"
import wifi from './images/wifi.png'

function Connection(){
    return(
        <div className="viconnect">
            <div className="connect">
               <div className="leftcon">
               <FaSimCard style={{fontSize:"30px"}} className="sc"/>
                <FaSimCard style={{fontSize:"30px"}} className="sc"/>
                <FaPortrait style={{fontSize:"30px"}} className="sc"/>
                <LuCrown style={{fontSize:"30px"}} className="sc"/>
               </div>
               <div className="rightcon">
                <img className="wifi" src={wifi} style={{height:"160px", width:"160px"}} alt=""></img>
                {/* <img src={visim} className="simm" style={{height:"80px", width:"80px"}} alt=""></img> */}
                <h3>Portable Wifi - Free <br></br><b>home delivery</b></h3>
                <p>Order Now <TbMathGreater style={{marginBottom:"-3px"}}/><TbMathGreater style={{marginBottom:"-3px", marginLeft:"-2px"}}/></p>
               </div>
            </div>
        </div>
    )
}

export default Connection