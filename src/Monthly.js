import month from "./data/month";
import { FaRupeeSign } from "react-icons/fa"
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";

function Monthly() {
    return (
        <div className="quar" style={{marginTop:"50px"}}>
            <h1>Monthly packs</h1>
            <div className="allanual">
                {month.map(function (e) {
                    return (
                        <div key={e.price} className="anual">
                            <div className="anual1">
                                <h1><FaRupeeSign/>{e.price}</h1>
                                <img src={e.Image} alt=""></img>
                            </div>
                            <p>{e.offer}</p>
                            <div className="anual2">
                                <h1><span style={{marginRight:"8px"}}><FiPhoneCall/></span>{e.Value}</h1>
                                <h1><span style={{marginRight:"8px"}}><LuArrowUpDown/></span>{e.data}GB/day</h1>
                                <h1><span style={{marginRight:"8px"}}><FaRegCalendarAlt/></span>{e.days} Days</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Monthly