import herounlimit from "./herounlimit"
import { FaRupeeSign } from "react-icons/fa"
import {AiOutlineRetweet} from "react-icons/ai"
import { FaClock } from "react-icons/fa"
import { FaPlay } from "react-icons/fa"
import { FaGift } from "react-icons/fa"


function Unlimit(){
    return(
        <div className="all" id="Unlimit">
            {
                herounlimit.map(function(e){
                    return(
                        <div key={e.price}>
                            <div className="only">Only On Vi App - Extra 50GB Data Free</div>
                        <div className="price">
                            <div className="box">
                                <h1><FaRupeeSign style={{fontSize:"22px"}}/>{e.price}</h1>
                                <h4>{e.data}</h4>
                                <h4>{e.day}</h4>
                            </div>
                            <hr style={{borderTop:"dashed 2px"}}/>
                            <div className="freedata">
                                <h6><AiOutlineRetweet style={{paddingRight:"4px"}}/> Weakend data rollover</h6>
                                <h6><FaClock style={{paddingRight:"4px"}}/>Free Data 12 to 6am</h6>
                                <h6><FaPlay style={{paddingRight:"4px"}}/>Vi Movies & TV</h6>
                                <h6><FaGift style={{paddingRight:"4px"}}/>Data delight</h6>
                            </div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Unlimit