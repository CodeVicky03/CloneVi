import { useNavigate } from "react-router-dom"
import comali from './images/comali.jpg'
import doctor from './images/doctor.jpg'
import hero from './images/hero.jpg'
import imaka from './images/imaka.jpg'
import kaana from './images/kaana.jpg'
import karnan from './images/karnan.jpg'
import mafia from './images/mafia.jpg'
import master from './images/master.jpg'
import sulthan from './images/sulthan.jpg'
import teddy from './images/teddy.jpg'

function Callertune(){
    const navigate = useNavigate()
    return(
        <div className="tvallimg">
            <h1 style={{paddingBottom:"20px"}}>Callertune</h1>
            <div className="tvimg" >
            <img src={comali} alt="" onClick={() => navigate('/audioplayer')}></img>
                <img src={doctor} alt="" onClick={() => navigate('/audioplayer')}></img>
                <img src={hero} alt="" onClick={() => navigate('/audioplayer')}></img>
                <img src={imaka} alt="" onClick={() => navigate('/audioplayer')}></img>
                <img src={kaana} alt="" onClick={() => navigate('/audioplayer')}></img>
                <img src={karnan} alt="" onClick={() => navigate('/audioplayer')}></img>
                <img src={mafia} alt="" onClick={() => navigate('/audioplayer')}></img>
                <img src={master} alt="" onClick={() => navigate('/audioplayer')}></img>
                <img src={sulthan} alt="" onClick={() => navigate('/audioplayer')}></img>
                <img src={teddy} alt="" onClick={() => navigate('/audioplayer')}></img>
            </div>
        </div>
    )
}

export default Callertune