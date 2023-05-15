import React from 'react'
import { navItem } from './dataContext/ItemsArr'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <div className='navBar' >
      {navItem.map(curr => {
        return <div key={curr.key} className='navItem'>
          <Link to={curr.hrefStr} style={{ textDecoration: 'none', color: '#77b05b' }}>{curr.displayStr}</Link>
        </div>
      })}
    </div>
  )
}

export default Nav  