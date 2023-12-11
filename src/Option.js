import { FaMusic } from "react-icons/fa"
import { FaMobile } from "react-icons/fa"
import { FaUsb } from "react-icons/fa"
import { FaBlackTie } from "react-icons/fa"
import {FaGamepad} from "react-icons/fa"
import {FaTv} from "react-icons/fa"
import {FaPhoneVolume} from "react-icons/fa"
import {FaPrint} from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function Option(){
    const navigate = useNavigate()
    return(
        <div className="main">
            <div className="img1" onClick={() => navigate('/recharge')}>
                <h2><FaMobile/></h2>
            </div>
            <div className="img2" onClick={() => navigate('/recharge')}>
            <h2><FaUsb/></h2>
            </div>
            <div className="img3" onClick={() => navigate('/audioplayer')}>
                <h2><FaPhoneVolume/></h2>
            </div>
            <div className="img4">
                <h2><FaPrint/></h2>
            </div>
            <div className="img5" onClick={() => navigate('/videoplayer')}>
                <h2><FaTv/></h2>
            </div>
            <div className="img6" onClick={() => navigate('/audioplayer')}>
               <h2>< FaMusic/></h2>
            </div>
            <div className="img7">
                <h2><FaGamepad/></h2>
            </div>
            <div className="img8">
                <h2><FaBlackTie/></h2>
            </div>
        </div>
    )
}

export default Option