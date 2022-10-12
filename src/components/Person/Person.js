import React from 'react'
import './Person.scss'
import Path from '../../img/Path 1.png'
import Google from '../../img/Icon awesome-google.png'
import Line from '../../img/Icon awesome-line.png'
import FB from '../../img/Icon simple-facebook.png'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { useState } from 'react'
import { handleInputAccount, handleInputPassword } from '../RegularExpression'
import { signIn, forgotPassword, googleLogIn, FbLogin } from '../Firebase'
const Person = (props) => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [mesAccount, setMesAccount] = useState('')
  const [mesPassword, setMesPassword] = useState('')

  return (
    <div className="log-in">
      <div className="title">
        <h1>登入會員/log in</h1>
        <img src={Path} alt=""></img>
      </div>

      <div className="content">
        <p>帳號/Email</p>
        <input
          type="email"
          data-type="email"
          placeholder="輸入你的電子郵件地址..."
          tabIndex="1"
          value={account}
          onChange={(e) => handleInputAccount(e, setMesAccount, setAccount)}
        />
        <span style={{ color: 'red' }}>{mesAccount}</span>
        <br />
        <p>密碼</p>
        <input
          type="password"
          data-type="password"
          placeholder="輸入你的密碼..."
          tabIndex="2"
          autoComplete="off"
          value={password}
          onChange={(e) => handleInputPassword(e, setMesPassword, setPassword)}
        />
        <span style={{ color: 'red' }}>{mesPassword}</span>
        <br />
        <input type="submit" value="登入" onClick={() => signIn(account, password, props)} />
        <Link to="/Create">
          <input type="submit" value="註冊" />
        </Link>
        <h2>
          <a href="###" id="forget" onClick={(e) => forgotPassword(e, account)}>
            忘記密碼
          </a>
        </h2>
        <ul>
          <li>
            <a href="###">
              <img src={Google} alt="" onClick={() => googleLogIn(props)} />
            </a>
          </li>
          <li>
            <a href="###">
              <img src={Line} alt="" />
            </a>
          </li>
          <li>
            <a href="###">
              <img src={FB} alt="" onClick={() => FbLogin(props)} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default withRouter(Person)
