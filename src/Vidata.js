import vidata from "./data"
import { FaRupeeSign } from "react-icons/fa"


function Vidata(){
    return(
        <div className="all" id="Vidata">
            {
                vidata.map(function(e){
                    return(
                        <div key={e.Price} className="price">
                        <div className="box">
                            <h1><FaRupeeSign style={{fontSize:"22px"}}/>{e.Price}</h1>
                            <h4 style={{paddingLeft:"30px"}}>{e.Data}</h4>
                            <h4 style={{paddingLeft:"30px"}}>{e.Days}Days</h4>
                        </div>
                        <div className="no">
                            <p>No Service Validity</p>
                        </div>
                        <hr style={{borderTop:"dashed 2px"}}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Vidata