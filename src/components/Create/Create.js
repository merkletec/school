import React from 'react'
import './Create.scss'
import Path from '../../img/Path 1.png'
import back from '../../img/Backward arrow.png'
import { createUserInDB } from '../Firebase'
import { withRouter } from 'react-router'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { handleInputAccount, handleInputPassword } from '../RegularExpression'
const Create = (props) => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [mesAccount, setMesAccount] = useState('')
  const [mesPassword, setMesPassword] = useState('')
  const userName = useRef(null)
  const userBirthday = useRef(null)
  const userCountry = useRef(null)
  const userCity = useRef(null)
  const userAddress = useRef(null)
  const userSexBoy = useRef(null)

  function createUser(e) {
    const nameValue = userName.current.value
    const birthdayValue = userBirthday.current.value
    const countryValue = userCountry.current.value
    const cityValue = userCity.current.value
    const addressValue = userAddress.current.value
    const sexBoy = userSexBoy.current.checked

    if (nameValue === '') {
      alert('請輸入姓名')
    } else if (account === '') {
      alert('請輸入email')
    } else if (password === '') {
      alert('請輸入密碼')
    } else if (countryValue === 'choose') {
      alert('請選擇國家')
    } else if (cityValue === 'city') {
      alert('請選擇城市')
    } else if (addressValue === '') {
      alert('請輸入地址')
    } else {
      const userInfo = {
        email: account,
        password: password,
        name: nameValue,
        birthday: birthdayValue,
        country: countryValue,
        city: cityValue,
        address: addressValue,
        sex: sexBoy ? 'boy' : 'girl',
        lotteryState: false,
        lotteryContent: '',
        lotteryUse: false,
        personUrl: '',
      }
      createUserInDB(userInfo)
      props.history.push('/')
    }
  }
  return (
    <div className="create">
      <Link to="/Person">
        <img src={back} alt="" />
      </Link>

      <div className="title">
        <h1>建立資料</h1>
        <img src={Path} alt=""></img>
      </div>

      <div className="content">
        <ul>
          <li>
            <h3>姓名/Full Name</h3>
            <input type="text" placeholder="輸入你的姓名..." ref={userName} />
          </li>
          <li>
            <h3>電子郵件/Email</h3>
            <input
              type="email"
              data-type="email"
              placeholder="輸入你的電子郵件地址..."
              tabIndex="1"
              id="email"
              onChange={(e) => handleInputAccount(e, setMesAccount, setAccount)}
              value={account}
            />
            <span style={{ color: 'red' }}>{mesAccount}</span>
          </li>
          <li>
            <h3>密碼/Password</h3>
            <input
              type="password"
              data-type="password"
              placeholder="輸入你的密碼..."
              tabIndex="2"
              autoComplete="off"
              id="password"
              onChange={(e) => handleInputPassword(e, setMesPassword, setPassword)}
              value={password}
            />
            <span style={{ color: 'red' }}>{mesPassword}</span>
          </li>
        </ul>

        <ul>
          <li>
            <h3>生日/Date of Birth</h3>
            <input
              type="date"
              defaultValue="2020-11-29"
              min="1911-01-01"
              max="2100-12-31"
              step="1"
              ref={userBirthday}
            />
          </li>
          <li>
            <h3>國家/Country/Region</h3>
            <select defaultValue={'choose'} ref={userCountry}>
              <option value="choose" disabled>
                請選擇你的國家
              </option>
              <option value="Taiwan">Taiwan</option>
              <option value="Japan">Japan</option>
              <option value="Korea">Korea</option>
              <option value="USA">USA</option>
              <option value="5">else</option>
            </select>
          </li>
          <li>
            <h3>城市/City</h3>
            <select defaultValue={'city'} ref={userCity}>
              <option value="city" disabled>
                請選擇你的城市
              </option>
              <option value="Taipei">台北</option>
              <option value="new taipei">新北</option>
              <option value="taoyuan">桃園</option>
              <option value="ju">新竹</option>
              <option value="5">else</option>
            </select>
          </li>
          <li>
            <h3>地址/Address</h3>
            <input type="text" placeholder="輸入你的地址..." tabIndex="1" ref={userAddress} />
          </li>
          <li>
            <h3>性別</h3>
            <input type="radio" name="sex" value="boy" defaultChecked ref={userSexBoy} /> 男
            <input type="radio" name="sex" value="girl" /> 女<br />
          </li>
        </ul>
        <input type="submit" value="建立" onClick={(e) => createUser(e)} />
      </div>
    </div>
  )
}
export default withRouter(Create)
