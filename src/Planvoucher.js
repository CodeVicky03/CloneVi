import plan from "./plan.js"
import { FaRupeeSign } from "react-icons/fa"
import { AiOutlineRetweet } from "react-icons/ai"
import { FaClock } from "react-icons/fa"
import { FaPlay } from "react-icons/fa"
import { FaGift } from "react-icons/fa"

function Planvoucher() {
    return (
        <div className="all" id="Planvoucher">
            {
                plan.map(function (e) {
                    return (
                        <div key={e.Price}>
                            <div className="only" style={{ backgroundColor: "rgba(9,14,98,0.6194677700181634)", width: "250px" }}>Only On Vi App - One Year Plan</div>
                            <div className="price">
                                <div className='hu'>
                                    <p><span>Hero</span><br></br>Unlimited</p>
                                </div>
                                <div className="box">
                                    <h1 style={{ width: "100px" }}><FaRupeeSign style={{ fontSize: "22px" }} />{e.Price}</h1>
                                    <h4>{e.Data}</h4>
                                    <h4>{e.Days}</h4>
                                </div>
                                <hr style={{ borderTop: "dashed 2px" }} />
                                <div className="freedata">
                                    <h6><AiOutlineRetweet style={{ paddingRight: "4px" }} /> Weakend data rollover</h6>
                                    <h6><FaClock style={{ paddingRight: "4px" }} />Free Data 12 to 6am</h6>
                                    <h6 ><FaPlay style={{ paddingRight: "4px" }} />Vi Movies & TV</h6>
                                    <h6 ><FaGift style={{ paddingRight: "4px" }} />Data delight</h6>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Planvoucher
