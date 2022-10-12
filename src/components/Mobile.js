import React from 'react'
import { Link } from 'react-router-dom'
import './Mobile.scss'
import ShopCount from '../img/header-3.png'
import Person from '../img/header-4.png'
import { icon } from './AddLocalStorage'
import { useEffect } from 'react'
const Mobile = ({ status }) => {
  useEffect(() => {
    icon()
  }, [])
  const personPage = (
    <Link to="/Person">
      <img src={Person} alt="" id="headerImg4" />
      <span>會員</span>
    </Link>
  )
  const informationPage = (
    <Link to="/Information">
      <img src={Person} alt="" id="headerImg4" />
      <span>會員</span>
    </Link>
  )
  return (
    <ul className="mobile">
      <li>
        <Link to="/Shop">
          <img src={ShopCount} alt="" />
          購物車
          <div className="mobileshopCount">0</div>
        </Link>
      </li>
      <li>{status ? informationPage : personPage}</li>
    </ul>
  )
}

export default Mobile
