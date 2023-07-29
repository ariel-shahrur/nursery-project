import React from 'react'

import { Link } from 'react-router-dom'
import './Nav.css'
import Cookies from 'js-cookie'
const token= Cookies.get('token');


function Nav(props: {navItems: any[],isConncted:boolean}) {
  return (
    <div className='navBar' >
      {props.navItems.map(curr => {
        if (curr.hrefStr === '/login') {
          return (<div key={curr.key} className='navItem'>
                  <Link to={curr.hrefStr} style={{ textDecoration: 'none', color: '#77b05b' }}>{props.isConncted ? 'Log out' : 'Log in'}</Link>
                 </div>)
        }
        return (<div key={curr.key} className='navItem'>
          <Link to={curr.hrefStr} style={{ textDecoration: 'none', color: '#77b05b' }}>{curr.displayStr}</Link>
        </div>)
      })}
    </div>
  )
}

export default Nav  