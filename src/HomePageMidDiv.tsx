import { useState } from 'react';
import { Link } from 'react-router-dom'
import './HomePageMidDiv.css'

function HomePageMidDiv() {

  const [theCurrentPart, setTheCuurentPart] = useState(0);

  setTimeout(() => {
    setTheCuurentPart((theCurrentPart + 1) % 3)
  }, 10000);




  return (
    <div>
      <div className='homePageMidDiv'>

        {theCurrentPart === 0 && <div className='homeImgDiv1'>
          <h1>Perfect <span style={{ color: "green" }}>plant</span></h1>
          <p>Up To 50% Off Scullants Plants</p>
          <Link to='/shop' style={{ textDecoration: 'none', color: '#4ab017', fontWeight: "bold" }}>shop Now</Link>
          <div className='dotDiv'>
            <div className='dot' onClick={() => { setTheCuurentPart(0) }}>O</div>
            <div className='dot' onClick={() => { setTheCuurentPart(1) }}>O</div>
            <div className='dot' onClick={() => { setTheCuurentPart(2) }}>O</div>
          </div>
        </div>}

        {theCurrentPart === 1 && <div className='homeImgDiv2'>
          <h1>End Of <span style={{ color: "green" }}>Season</span></h1>
          <p>Save Up To 30%</p>
          <Link to='/shop' style={{ textDecoration: 'none', color: '#4ab017', fontWeight: "bold" }}>shop Now</Link>
          <div className='dotDiv'>
            <div className='dot' onClick={() => { setTheCuurentPart(0) }}>O</div>
            <div className='dot' onClick={() => { setTheCuurentPart(1) }}>O</div>
            <div className='dot' onClick={() => { setTheCuurentPart(2) }}>O</div>
          </div>
        </div>}

        {theCurrentPart === 2 && <div className='homeImgDiv3'>
          <h1>Pot and <span style={{ color: "green" }}>Planter</span></h1>
          <p>A wide variety of Pot and Planter</p>
          <Link to='/shop' style={{ textDecoration: 'none', color: '#4ab017', fontWeight: "bold" }}>shop Now</Link>
          <div className='dotDiv'>
            <div className='dot' onClick={() => { setTheCuurentPart(0) }}>O</div>
            <div className='dot' onClick={() => { setTheCuurentPart(1) }}>O</div>
            <div className='dot' onClick={() => { setTheCuurentPart(2) }}>O</div>
          </div>
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
    </div>
  )
}

export default HomePageMidDiv

