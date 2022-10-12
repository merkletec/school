import React from 'react'
import Slider from 'react-slick'
import newsImg1 from '../../img/Path 1.png'
import newsImg2 from '../../img/news-1.png'
import newsImg3 from '../../img/news-2.jpg'
import newsImg4 from '../../img/news-3.jpg'
import newsImg5 from '../../img/index-8.png'
import newsImg6 from '../../img/index-7.png'
import newsImg7 from '../../img/news-4.png'
import newsImg8 from '../../img/news-5.png'
import { useState, useEffect, useRef } from 'react'

import './News.scss'
const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  }
  useEffect(() => {
    function onScroll() {
      let sliderDiv = document.querySelectorAll('.block')
      sliderDiv.forEach((sliderDiv) => {
        const slideInAt = window.scrollY + window.innerHeight - sliderDiv.offsetHeight / 2

        const divBottom = sliderDiv.offsetTop + sliderDiv.offsetHeight

        const isHalfShown = slideInAt > sliderDiv.offsetTop
        const isNotScrolledPass = window.scrollY < divBottom
        if (isHalfShown && isNotScrolledPass) {
          sliderDiv.classList.add('active')
        } else {
          sliderDiv.classList.remove('active')
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="news">
      <div className="title">
        <h1>最新消息</h1>
        <img src={newsImg1} alt=""></img>
      </div>

      <div className="main">
        <div className="main-top">
          <div className="newsSlider">
            <Slider {...settings}>
              <div>
                <img src={newsImg2} alt=""></img>
                <div>
                  <p>恭賀，【漢方輕。茶飲】於10/10日起，開啟線上平台。</p>
                </div>
              </div>
              <div>
                <img src={newsImg3} alt=""></img>
                <div>
                  <p>凡加入會員，首次購買即可享$100元折價券。</p>
                </div>
              </div>
              <div>
                <img src={newsImg4} alt=""></img>
                <div>
                  <p>恭賀，【漢方輕。茶飲】於10/10日起，官方LINE上線了。</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="main-content">
          <div className="block align-left">
            <div className="block-left">
              <h2>【漢方輕。茶飲】正式上線</h2>
              <p>恭賀，【漢方輕。茶飲】於10/10日起，開啟線上平台。</p>
              <input type="button" value="Read more"></input>
            </div>
            <div className="block-right">
              <img id="img1" src={newsImg2} alt="" />
            </div>
          </div>
          <div className="block align-right">
            <div className="block1-left">
              <img src={newsImg3} alt="" />
            </div>
            <div className="block1-right">
              <h2>會員制度全新上線</h2>
              <p>凡加入會員，首次購買即可享$100元折價券。</p>
              <p>推薦好友加入，即可獲得$200元折價券。</p>
              <input type="button" value="Read more"></input>
            </div>
          </div>
          <div className="block align-left">
            <div className="block-left">
              <h2>滿額贈 品牌吸管組</h2>
              <p>即日起，凡購買滿$500元，贈送本公司限量環保吸管組1組，送完為止。</p>
              <input type="button" value="Read more"></input>
            </div>
            <div className="block-right">
              <img src={newsImg5} alt="" />
            </div>
          </div>
          <div className="block align-right">
            <div className="block1-left">
              <img src={newsImg6} alt="" />
            </div>
            <div className="block1-right">
              <h2>滿額免運費</h2>
              <p>限時，全館購買滿$399免運費。</p>
              <p>活動至 2020/11/8 截止。</p>
              <input type="button" value="Read more"></input>
            </div>
          </div>
          <div className="block align-left">
            <div className="block-left">
              <h2>提醒公告</h2>
              <p>
                防詐騙電話，信用卡匯款或取消訂單的詐騙電話，官網全面加強防護升級！本公司【漢方輕。茶飲】絕對不會通知您分期付款發生設定錯誤、要求操作ATM解除。
              </p>
              <input type="button" value="Read more"></input>
            </div>
            <div className="block-right">
              <img src={newsImg7} alt="" />
            </div>
          </div>
          <div className="block align-right">
            <div className="block1-left">
              <img src={newsImg8} alt="" />
            </div>
            <div className="block1-right">
              <h2>官方LINE開幕了!</h2>
              <p>恭賀，【漢方輕。茶飲】於10/10日起，官方LINE上線了。</p>
              <input type="button" value="Read more"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default News
