import React from 'react'
import { Link } from 'react-router-dom'

// import firebase from 'firebase'
import { useEffect, useState } from 'react'
// import { firebaseConfig } from './FirebaseKey'
import './Header.scoped.scss'
// import { icon } from './AddLocalStorage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Header = ({ status, handleSetState }) => {
  const [barState, setBarState] = useState(false)
  window.onscroll = function () {
    setBarState(false)
  }
  useEffect(() => {
    setBarState(false)
  }, [])
//  useEffect(() => {
//    //為避免firebase被重複初始化要加入以下這段程式碼
//    icon()
//    if (!firebase.apps.length) {
//      firebase.initializeApp(firebaseConfig)
//    }
//    const headerImgAll = []

//   for (let i = 1; i < 5; i++) {
//     const headerImage = firebase
//       .storage()
//       .ref('image/header-' + i + '.png')
//       .getDownloadURL()
//       .then((fileUrl) => {
//         return fileUrl
//       })
//     headerImgAll.push(headerImage)
//   }
//    Promise.all(headerImgAll)
//      .catch((err) => {
//        console.log('error', err)
//      })
//      .then((urls) => {
//        for (let i = 0; i <= urls.length - 1; i++) {
//          document.getElementById('headerImg' + [i + 1]).src = urls[i]
//        }
//      })
//  }, [])
  //const personPage = (
    //<Link to="/Person">
      //<img src="" alt="" id="headerImg4" />
     // <span>會員</span>
   // </Link>
  //)
 // const informationPage = (
 //   <Link to="/Information">
 //     <img src="" alt="" id="headerImg4" />
 //     <span>會員</span>
 //   </Link>
 // )
  return (
    <header>
      <div className="header-content">
        <FontAwesomeIcon icon={faBars} className="fa fa-bars" onClick={() => setBarState(!barState)} />
        <div className="header_img">
          <Link to="/">
            <img src={"../src/img/2.svg"} alt="" id=""></img>
          </Link>
        </div>
        {/* <ul className="header-list hideHam"> */}
        <ul className={`header-list ${barState ? '' : 'hideHam'}`}>
        <li>
            <Link to="/Story" className="btn-2">
            <img  src={"../src/img/2.svg"} alt="" id=""></img> 
            123
            </Link>
          </li>
          <li>
            <Link to="/Story" className="btn-2">
              品牌故事
            </Link>
          </li>
          <li>
            <a href="###" className="btn-2">
              最新消息
            </a>
            <ul>
              <li>
                <Link to="/News" className="btn-2">
                  最新消息
                </Link>
              </li>
              <li>
                <Link to="/Blog" className="btn-2">
                  部落格
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/Items" className="btn-2">
              產品總覽
            </Link>
          </li>
          <li>
            <Link to="/Hot" className="btn-2">
              熱銷排行
            </Link>
          </li>
          <li>
            <a href="###" className="btn-2">
              熱門Q&A
            </a>
            <ul>
              <li>
                <Link to="/Problem" className="btn-2">
                  常見問題
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="btn-2">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="header-icon">
          <li className="search" onClick={() => handleSetState(true)}>
            <a href="###">
              <img src="" alt="" id="headerImg2" />
              <span>搜尋</span>
            </a>
          </li>
          <li id="shop" onClick={() => window.location.reload()}>
            <Link to="/Shop">
              <img src="" alt="" id="headerImg3" />
              <div className="shopCount">0</div>
              <span>購物車</span>
            </Link>
          </li>
         {/*} <li>{status ? informationPage : personPage}</li> */}
        </ul>
      </div>
    </header>
  )
}
export default Header
