import packs from "./packs"
import { FaRupeeSign } from "react-icons/fa"

function Values(){
    return(
        <div className="all" id="Values">
            {
                packs.map(function(e){
                    return(
                        <div key={e.price} className="price">
                        <div className="box">
                            <h1><FaRupeeSign style={{fontSize:"22px"}}/>{e.price}</h1>
                            <h4>{e.data}</h4>
                            <h4>{e.days}</h4>
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

export default Values