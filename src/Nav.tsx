import React from 'react'
import { navItem } from './ItemsArr'
import { Link } from 'react-router-dom'
import  './Nav.css'

function Nav() {
  return (
    <div className='navBar' >
        {navItem.map(curr=>{ 
            return <div key={curr.key} className='navItem'>
         <Link key={curr.key} to={curr.hrefStr} style={{ textDecoration: 'none',color: '#9f9b9b'  }}>{curr.displayStr}</Link>
    </div>})}
    </div>
  )
}

export default Nav  