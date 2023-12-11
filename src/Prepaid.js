import { FaUser } from "react-icons/fa"
import { FaMobile } from "react-icons/fa"
import { MdMovie } from "react-icons/md";
import { BsAirplaneFill } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GiUpgrade } from "react-icons/gi";
import { MdPhonelinkSetup } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom"

function Prepaid() {
    const navigate = useNavigate()
    return (
        <div className="allprepaid">
            <h1 className='pre'>Prepaid Services</h1>
        <div className="prepaid">
            <div>
                <FaUser />
                <p style={{color:"black", fontWeight:"600"}}>Recharge for others</p>
            </div>
            <div onClick={() => navigate('/recharge')}>
                <FaMobile />
                <p style={{color:"black", fontWeight:"600"}}>Data packs</p>
            </div>
            <div>
                <MdMovie />
                <p style={{color:"black", fontWeight:"600"}}>OTT packs</p>
            </div>
            <div>
                <BsAirplaneFill />
                <p style={{color:"black", fontWeight:"600"}}>International roaming</p>
            </div>
            <div>
                <GiUpgrade />
                <p style={{color:"black", fontWeight:"600"}}>Upgrade to postpaid</p>
            </div>
            <div>
                <FaHandHoldingHeart />
                <p style={{color:"black", fontWeight:"600"}}>Vi services</p>
            </div>
            <div>
                <MdPhonelinkSetup />
                <p style={{color:"black", fontWeight:"600"}}>setup autopay</p>
            </div>
            <div>
                <RiCoupon2Fill />
                <p style={{color:"black", fontWeight:"600"}}>My coupons</p>
            </div>
        </div>
        </div>
    )
}

export default Prepaid