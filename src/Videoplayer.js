import videos from "./data/videos"
import images from "./data/images"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import live from './data/live.js'

function Videoplayer() {

  const [play, setplay] = useState('')
  const navigate = useNavigate()
  function playvideo(id) {
    setplay(id)
  }

  return (
    <div className="videoplayer">
      <div className="videohead">
        <h1>Vi MT</h1>
        <ul>
          <li onClick={() => navigate("/home")}>Home</li>
          <li>News</li>
          <li>Movies</li>
          <li>Devotional</li>
          <li>Kids</li>
        </ul>
      </div>
      <div>
        {
          videos.map(function (v) {
            if (v.id === play) {
              return (
                <div key={v.id} className="video-player">
                  <video className="video-player" controls autoPlay muted>
                    <source src={v.video} type='video/mp4' />
                  </video>
                </div>
              )
            }
            else {
              console.log("Video Not Found")
              return null
            }
          })
        }
      </div>
      <div style={{overflow:"hidden"}}>
        <div className="all-live">
          {
            live.map(function (e) {
              return (
                <div className="live">
                  <p className="liv"></p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h2 style={{ padding: "10px", fontSize: "18px" }}>Trending Movies</h2>
        <div className="trend">
          {
            images.map(function (e) {
              if (e.id < 5) {
                return (
                  <div key={e.id}>
                    <img className="imgnew" src={e.img} alt="" onClick={() => playvideo(e.id)}></img>
                  </div>
                )
              }
              else {
                return null
              }
            })
          }
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2 style={{ paddingLeft: "10px", fontSize: "18px" }}>Top Movies</h2>
        <div className="trend">
          {
            images.map(function (e) {
              if (e.id >= 5) {
                return (
                  <div key={e.id}>
                    <img className="imgnew" src={e.img} alt="" onClick={() => playvideo(e.id)}></img>
                  </div>
                )
              }
              else {
                return null
              }
            })
          }
        </div>
      </div>

      <div className="vdfoot">
        <ul>
          <li>Movies</li>
          <li>Search</li>
          <li>Menu</li>
        </ul>
      </div>
    </div>
  )
}

export default Videoplayer
