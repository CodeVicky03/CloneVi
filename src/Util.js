import book from "./book.png"
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { FaSatelliteDish } from "react-icons/fa";
import { MdOutlineGasMeter } from "react-icons/md";

function Util(){
    return(
        <div className="allutil">
            <h1 className='ut'>Utilities</h1>
        <div className="util">
            <div className="left">
                <img src={book} alt=""></img>
                <h1>Quick and easy untility<br></br> bill payments</h1>
                <p>With <b>ZERO</b> convenience fees !</p>
                <h4 style={{color:"black"}}>Start Paying</h4>
                {/* <img className="hide" src={hide} alt=""></img> */}
            </div>
            <div className="right">
                <div>
                <AiTwotoneThunderbolt/>
                <p><b>Electricity</b></p>
                </div>
                <div>
                <FaSatelliteDish/>
                <p><b>FAS Tag</b></p>
                </div>
                <div>
                <MdOutlineGasMeter/>
                <p><b>LPG</b></p>
                </div>
                <div>
                <MdPayment/>
                <p><b>Loan <br></br> Repayment</b></p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Util