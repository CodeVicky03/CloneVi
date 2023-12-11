import './style/audio.css'
import audio from './data/audio'
import auimage from './data/auimage'
import { useState } from "react"

function Audioplayer() {
    const [adimage, setadimage] = useState('')
    const[imgid, setimgid] = useState()
    function imageadd(id, img){
        setimgid(id)
        setadimage(img)
    }
    return (
        <div className='audio-player'>
            <div className='left-audio'>
                <h3>Music</h3>
                <h5>Trending</h5>
                <h5>Top Music</h5>
                <h5>Wish List</h5>
            </div>
            <div className='right-audio'>
                <h3 style={{ textAlign: "start", padding: '20px' }}>Enjoy Music</h3>
                <div className="audio-order">
                    {
                        auimage.map(function (e) {
                            if (e.id <= 5) {
                                return (
                                    <div className="audio-div" key={e.id}>
                                        <img className="audio-img" src={e.img} alt="" onClick={()=> imageadd(e.id , e.img)}></img>
                                    </div>
                                )
                            }
                            else {
                                return null
                            }
                        })
                    }
                </div>
                <div className="audio-order">
                    {
                        auimage.map(function (e) {
                            if (e.id > 5) {
                                return (
                                    <div className="audio-div" key={e.id}>
                                        <img className="audio-img" src={e.img} alt="" onClick={()=> imageadd(e.id , e.img)}></img>
                                    </div>
                                )
                            }
                            else {
                                return null
                            }
                        })
                    }
                </div>
                <div className="immm">
                <img style={{height:"200px", width:"200px", backgroundColor:"black"}} src={adimage} alt=''></img>
                </div>
                <div className='mainad'>
                    {
                        audio.map(function(e){
                            if(e.id === imgid){
                                return(
                                   <div key={e.id}>
                                     <audio controls autoPlay style={{width:"200px", backgroundColor:"transparent"}}>
                                        <source src={e.audio} type='audio/mp3'></source>
                                    </audio>
                                   </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Audioplayer