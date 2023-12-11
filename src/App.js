import Option from './Option';
import Prepaid from "./Prepaid.js"
import { FaHeadset } from "react-icons/fa";
import Slidere from './Slidere.js';
import Util from "./Util.js"
import Quarterly from './Quarterly.js';
import Mtv from './Mtv.js';
import Music from './Music.js'
import Callertune from './Callertune.js';
import Monthly from './Monthly.js';
import Annual from './Annual.js';
import Connection from './Connection.js'
import Help from './Help.js';

function App() {
  return (
    <div>
      <div className="one">
        <h4>username</h4>
        <div className="two">
          <h4>Help</h4>
          <h4 className="ne"><FaHeadset /></h4>
        </div>
      </div>
      <div>
        <Option />
      </div>
      <div>
        <Prepaid />
      </div>
      <div>
        <Slidere/>
      </div>
      <div style={{backgroundColor:"white"}}>
        <Util/>
      </div>
      <div>
        <Quarterly/>
      </div>
      <div>
        <Mtv/>
      </div>
      <div>
        <Music/>
      </div>
      <div>
        <Monthly/>
      </div>
      <div>
        <Callertune/>
      </div>
      <div>
        <Annual/>
      </div>
      <div>
        <h1 className='coh1'>Get a Vi Connection</h1>
        <Connection/>
      </div>
      <div>
        <Help/>
      </div>
    </div>
  )
}

export default App;
