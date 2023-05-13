import { useState } from 'react';
import { Link } from 'react-router-dom'
import './HomePageMidDiv.css'
import { log } from 'console';

function HomePageMidDiv() {

const [theCurrentPart,setTheCuurentPart]=useState(0);

setTimeout(() => {
  setTheCuurentPart((theCurrentPart+1)%3)
}, 10000);




  return (
    <div>
        <div className='homePageMidDiv'>

      {theCurrentPart===0 && <div className='homeImgDiv1'>
        <h1>Perfect plant</h1>
        <p>Up To 50% Off Scullants Plants</p>
        <Link to='/shop' style={{ textDecoration: 'none',color: '#9f9b9b'  }}>shop Now</Link>
      </div>}
    
      {theCurrentPart===1 && <div className='homeImgDiv2'>
        <h1>End Of Season</h1>
        <p>Save Up To 30%</p>
        <Link to='/shop' style={{ textDecoration: 'none',color: '#9f9b9b'  }}>shop Now</Link>
      </div>}

      {theCurrentPart===2 && <div className='homeImgDiv3'>
        <h1>Pot and Planter</h1>
        <p>A wide variety of Pot and Planter</p>
        <Link to='/shop' style={{ textDecoration: 'none',color: '#9f9b9b'  }}>shop Now</Link>
      </div>}


        <div id="rightDivHomePage">
          <div className="rightDivItemUp">
    <h2>Indoor Plsnts</h2>
          </div>
          <div className="rightDivItemDown">
<h2>Outdoor Plants</h2>
          </div>
        </div>
    </div>
    <div className='dotDiv'>
        <div className='dot' onClick={()=>{setTheCuurentPart(0)}}>O</div>
        <div className='dot' onClick={()=>{setTheCuurentPart(1)}}>O</div>
        <div className='dot' onClick={()=>{setTheCuurentPart(2)}}>O</div>
    </div>
    </div>
  )
}

export default HomePageMidDiv

function useEffect(arg0: () => () => void, arg1: never[]) {
  throw new Error('Function not implemented.');
}
