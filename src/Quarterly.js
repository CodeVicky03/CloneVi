import quart from "./quart"
import { FaRupeeSign } from "react-icons/fa"
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";

function Quarterly() {
    return (
        <div className="quar">
            <h1>Quarterly packs</h1>
            <div className="allanual">
                {quart.map(function (e) {
                    return (
                        <div key={e.Price} className="anual">
                            <div className="anual1">
                                <h1><FaRupeeSign/>{e.Price}</h1>
                                <img src={e.Image} alt=""></img>
                            </div>
                            <p>{e.offer}</p>
                            <div className="anual2">
                                <h1><span style={{marginRight:"8px"}}><FiPhoneCall/></span>{e.Value}</h1>
                                <h1><span style={{marginRight:"8px"}}><LuArrowUpDown/></span>{e.Data}</h1>
                                <h1><span style={{marginRight:"8px"}}><FaRegCalendarAlt/></span>{e.Day} Days</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Quarterly