import batman from "./images/batman.jpg"
import cod from "./images/cod.jpg"
import desaster from "./images/desaster.jpg"
import endgame from "./images/endgame.jpg"
import gravity from "./images/gravity.jpg"
import moon from "./images/moonnight.jpg"
import spider from "./images/spider.jpg"
import starwar from "./images/starwar.jpg"
import { useNavigate } from "react-router-dom"

function Mtv(){
    const navigate = useNavigate()
    return(
        <div className="tvallimg">
            <h1>Vi MTV</h1>
            <h3>Popular Movies</h3>
            <div className="tvimg">
                <img src={batman} alt="" onClick={() => navigate('/videoplayer')}></img>
                <img src={cod} alt="" onClick={() => navigate('/videoplayer')}></img>
                <img src={desaster} alt="" onClick={() => navigate('/videoplayer')}></img>
                <img src={endgame} alt="" onClick={() => navigate('/videoplayer')}></img>
                <img src={gravity} alt="" onClick={() => navigate('/videoplayer')}></img>
                <img src={moon} alt="" onClick={() => navigate('/videoplayer')}></img>
                <img src={spider} alt="" onClick={() => navigate('/videoplayer')}></img>
                <img src={starwar} alt="" onClick={() => navigate('/videoplayer')}></img>
            </div>
        </div>
    )
}

export default Mtv