import logo from './images/vi.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const [userNumber, setuserNumber] = useState('')
    const navigate = useNavigate()
    
    const alert = document.getElementById('alert')
    const mobilenumber = document.querySelector(".mobile-number")
    function mobile(e){
        setuserNumber(e.target.value)
    }
    function redirect(){
        if(userNumber.length === 10){
            alert.style.display="none"
            mobilenumber.classList.remove("red")
            navigate('/home')
        }
        else{
            alert.style.display="block"
            mobilenumber.classList.add("red")
        }
    }
    return (
        <div className="main-home">
            <img src={logo} alt=''></img>
            <div className="homee">
                <h1>Welcome to <b style={{color:"red"}}>VI</b></h1>
                <h4>Enter your Mobile Number</h4>
                <div id='alert' style={{display:"none", color:"red"}}>Please check your mobile number</div>
                <input type="number" className="country-number" /><span><input type="number" placeholder="" value={userNumber} onChange={mobile}  className="mobile-number" /></span><br></br>
                <button onClick={redirect}>log in</button>
                <p>By clicking on login, I accept all the <u style={{cursor:"pointer"}}><b>terms and conditions</b></u></p>
            </div>
        </div>
    )
}

export default Home