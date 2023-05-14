import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { navItem,typeSElectBoxArr } from './ItemsArr'
import logo from './logo.png'

function Footer() {
  return (
    <div id='footerDiv'>
        <div className="footerItem"><img src={logo} alt="" /></div>
        <div className="footerItem">
        <div className="footerMidDivItem">
          <p>
          Write in WAZE: Nursery - Green Garden.
          </p>
        </div>
        <div className="footerMidDivItem">
          <p>Weekdays: 8:00-18:00<br />
          Fridays and holiday eves 8:00-14:00
          </p>
        </div>
        <div className="footerMidDivItem">
          <p>GreenGarden@gmail.co.il
          </p>
        </div>
        <div className="footerMidDivItem">
          <p>050-7766289
          </p>
        </div>
        </div>
        <div className="footerItem">
            <h5>Our Shop</h5>
            {typeSElectBoxArr.map((curr)=>{
        return curr.value==="all"||<div key={curr.key}>{curr.displayStr}</div>
      })}
        </div>
        <div className="footerItem">
        <h5>Fast navigation</h5>
            {navItem.map((curr,i)=>{ 
            return i===0 || <div className='footerlastDivItem' key={curr.key}>
         <Link  to={curr.hrefStr} style={{ textDecoration: 'none'}}>{curr.displayStr}</Link>
    </div>})}
        </div>
    </div>
  )
}

export default Footer