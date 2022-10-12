import React from 'react'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import { useEffect } from 'react'
import { firebaseConfig } from './FirebaseKey'
import './Footer.scss'
const Footer = () => {
  useEffect(() => {
    //為避免firebase被重複初始化要加入以下這段程式碼
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
    const footerImgAll = []

    for (let i = 1; i < 5; i++) {
      const headerImage = firebase
        .storage()
        .ref('image/footer-' + i + '.png')
        .getDownloadURL()
        .then((fileUrl) => {
          return fileUrl
        })
      footerImgAll.push(headerImage)
    }

    Promise.all(footerImgAll)
      .catch((err) => {
        console.log('error', err)
      })
      .then((urls) => {
        for (let i = 0; i <= urls.length - 1; i++) {
          document.getElementById('footerImg' + [i + 1]).src = urls[i]
        }
      })
  }, [])
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <h3>漢方輕。茶飲</h3>
          <p>照顧您的健康 是我們的榮幸</p>
          <ul>
            <li>
              <a href="https://www.facebook.com/">
                <img src="" alt="" id="footerImg1"></img>
              </a>
            </li>
            <li>
              <a href="https://www.google.com/gmail/">
                <img src="" alt="" id="footerImg2"></img>
              </a>
            </li>
            <li>
              <a href="https://www.skype.com/zh-Hant/features/calling-and-instant-messaging/">
                <img src="" alt="" id="footerImg3"></img>
              </a>
            </li>
            <li>
              <a href="https://line.me/zh-hant/">
                <img src="" alt="" id="footerImg4"></img>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <ul>
            <li>
              <h3>關於我們</h3>
              <Link to="/Story">品牌故事</Link>
              <Link to="/News">最新消息</Link>
              <Link to="/Items">產品總覽</Link>
            </li>
            <li>
              <h3>Q&A</h3>
              <Link to="/Problem">常見問題</Link>
              <Link to="/Problem">如何購買</Link>
              <Link to="/Contact">聯絡我們</Link>
            </li>
            <li>
              <h3>聯絡資訊</h3>
              <p>客服專線:0916-369-062</p>
              <p>地址:新北市三重區忠孝路二段38巷</p>
              <p>時間:10:00 ~ 18:00</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
