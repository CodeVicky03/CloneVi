import com from "./com"
import { FaRupeeSign } from "react-icons/fa"

function Combo(){
    return(
        <div className="all"  id="Combo">
            {
                com.map(function(e){
                    return(
                        <div key={e.price} className="price">
                        <div className="box">
                            <h1 style={{width:"100px"}}><FaRupeeSign style={{fontSize:"22px"}}/>{e.price}</h1>
                            <h4 style={{fontSize:"12px", width:"110px", paddingLeft:"10px"}}><FaRupeeSign style={{fontSize:"15px"}}/>{e.price}<br></br><span style={{fontSize:"10px", opacity:"0.8"}}>Limited Validity Talk Time</span></h4>
                            <h4 style={{fontSize:"12px"}}>{e.data}</h4>
                            <h4 style={{fontSize:"12px"}}>{e.day}</h4>
                        </div>
                        <hr style={{borderTop:"dashed 2px"}}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Combo