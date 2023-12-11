import { CgProfile } from "react-icons/cg";
import { MdNetworkCheck } from "react-icons/md";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { RiRobot2Fill } from "react-icons/ri";

function Help(){
    return(
        <div style={{padding:"20px"}}>
            <h1 className="vihelp">Vi Help and Support</h1>
            <div className="allsuppor">
                <div className="suppor">
                    <RiRobot2Fill style={{fontSize:"22px", filter:"drop-shadow(2px 2px 2px orange)"}}/>
                    <p>Chat with<br></br> VIC</p>
                </div>
                <div className="suppor">
                    <CgProfile style={{fontSize:"22px", filter:"drop-shadow(2px 2px 2px orange)"}}/>
                    <p>Update<br></br> profile</p>
                </div>
                <div className="suppor">
                    <MdNetworkCheck style={{fontSize:"22px", filter:"drop-shadow(2px 2px 2px orange)"}}/>
                    <p>Network<br></br> support</p>
                </div>
                <div className="suppor" style={{height:"38px"}}>
                    <FaUnlockKeyhole style={{fontSize:"22px", filter:"drop-shadow(2px 2px 2px orange)"}}/>
                    <p>DND</p>
                </div>
            </div>
        </div>
    )
}

export default Help