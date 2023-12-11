import { FaArrowLeft } from "react-icons/fa"
import { FaPencilAlt } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import { FaTag } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import Values from "./Values"
import Hero from "./Hero"
import Ott from "./Ott"
import Unlimit from "./Unlimit"
import Combo from "./Combo"
import Vidata from "./Vidata"
import Planvoucher from "./Planvoucher"

function Recharge() {
    const navigate = useNavigate()

    function back() {
        navigate("/home")
    }

    return (
        <div className="colo">
                <div className="re">
                    <div className="charge">
                        <h4 onClick={back} style={{ cursor: "pointer" }}><FaArrowLeft /></h4>
                        <h4 style={{ marginLeft: "6px" }}>Recharge for </h4>
                        <h4><FaPencilAlt /></h4>
                    </div>
                    <div style={{ fontSize: "18px", margin: "4px" }}>
                        <FaSearch />
                    </div>
                </div>

                <div className="tag">
                    <h5><FaTag color="red" style={{ fontSize: "18px" }} /> </h5>
                    <h5>discounts & offers</h5>
                </div>
                <div className="list">
                    <ul>
                        <li><a a href="#Values" style={{ textDecoration: "none", color: "black" }}>Recommended</a></li>
                        <li><a href="#Hero" style={{ textDecoration: "none", color: "black" }}>
                            <span style={{ color: "red" }}>Hero</span>
                            Unlimited</a>
                        </li>
                        <li><a href="#Ott" style={{ textDecoration: "none", color: "black" }}>OTTpacks</a></li>
                        <li><a href="#Unlimit" style={{ textDecoration: "none", color: "black" }}>Ulimited</a></li>
                        <li><a href="#Combo" style={{ textDecoration: "none", color: "black" }}>Combo</a></li>
                        <li><a href="#Vidata" style={{ textDecoration: "none", color: "black" }}>Data</a></li>
                        <li>Topup</li>
                        <li>Others</li>
                        <li><a href="#Planvoucher" style={{ textDecoration: "none", color: "black" }}>Planvoucher</a></li>
                        <li>InternationalRoaming</li>
                    </ul>
                </div>
            <div className="allvalue">
                <Values />
                <Hero />
                <Ott />
                <Unlimit />
                <Combo />
                <Vidata />
                <Planvoucher />
            </div>
        </div>
    )
}

export default Recharge