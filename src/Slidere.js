import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import man from "./man1.png"
import game from "./game.png"
import phone from "./phone.png"
import vimobile from "./vimobile.png"
import gift from "./gift.png"
import { useNavigate } from "react-router-dom"

function Slidere() {
    const navigate = useNavigate()

    return (
        <div className='slider'>
            <Swiper
                spaceBetween={2}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay={{ delay: 2000 }}
                loop={true}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="first">
                        <div className="second">
                            <h1>1.5<span style={{ fontSize: "12px" }}>GB</span></h1>
                            <h5>Data Left</h5>
                            <p>Unlimited pack valid till <b>1 jan,2024</b></p>
                            <button onClick={() => navigate('/recharge')}>Recharge Now</button>
                            <div className="dataday">
                                <h1>1GB 2GB</h1>
                                <p><b>DATA/DAY</b></p>
                                <p>get double data with <b>Rs.181</b>pack</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="first">
                        <div className="secontwo" style={{ backgroundColor: "rgba(41,12,235,0.8267506831834296)", boxShadow:"rgba(41,12,235,0.9267506831834296) 0px 7px 29px 0px" }}>
                            <img src={man} alt=''></img>
                            <h1>logic Quid</h1>
                            <br></br>
                            <h5>Boost Your <b>IQ</b><br></br> and Focus</h5>
                            <p>spend 15 mins daily on <br></br>india's #1 brain training app</p>
                            <button>FREE worksheet</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="first">
                        <div className="secontwo" style={{ backgroundColor: "rgba(12,235,82,0.964005585144214)", boxShadow:"rgba(12,235,82,0.664005585144214) 0px 7px 29px 0px"}}>
                            <img style={{ width: "100px", height: "100px", marginTop: "50px", marginRight:"20px"}} src={game} alt=''></img>
                            <h1>Bottle Shoot</h1>
                            <br></br>
                            <br></br>
                            <h5>Play and Earn <br></br><b>2GB Free Dara</b></h5>
                            <button>Play Free</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="first">
                        <div className="secontwo" style={{backgroundColor:"rgba(94,10,249,0.7763305151162028)", boxShadow:"rgba(94,10,249,0.7763305151162028) 0px 7px 29px 0px"}}>
                        <img className="imag" src={phone} alt=''></img>
                        <h1>Special Offers</h1>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h5>Treat yourself to <br></br><span style={{color:"black"}}>a Fancy Number</span></h5>
                        <button>Get Yours today</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="first">
                        <div className="secontwo" style={{backgroundColor:"rgba(214,12,12,0.8631652490097601)", boxShadow:"rgba(214,12,12,0.8631652490097601) 0px 7px 29px 0px"}}>
                        <img style={{ width: "100px", height: "130px", marginTop: "50px", marginRight:"20px",}} src={vimobile} alt=''></img>
                        <h1>Vi Music</h1>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h5>Get Unlimited AD <br></br><span style={{color:"black"}}>Free music</span></h5>
                        <button>Get Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="first">
                        <div className="secontwo" style={{backgroundColor:"rgba(214,12,155,0.7651260333234856)", boxShadow:"rgba(214,12,155,0.7651260333234856) 0px 7px 29px 0px"}}>
                        <img className='gift' src={gift} alt=''></img>
                        <h1>Special Gift</h1>
                        <br></br>
                        <h5>A special<br></br> thank you gift</h5>
                        <p style={{color:"black"}}>That can be enjoyed all year long !</p>
                        <button style={{marginTop:"10px"}}>Gift Now</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slidere