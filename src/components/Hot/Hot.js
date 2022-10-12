import React from 'react'
import './Hot.scss'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Path from '../../img/Path 1.png'
import { hotAddLocalstorage } from '../AddLocalStorage'
import { takeHotImg } from '../Firebase'
const Hot = () => {
  useEffect(() => {
    takeHotImg()
  }, [])
  return (
    <div className="hot">
      <div className="title">
        <h1>熱銷排行榜</h1>
        <img src={Path} alt=""></img>
      </div>

      <div className="hot-block">
        <ul>
          <li>
            <div className="block-top">
              <img src="" alt="" id="hotImg1" />
              <h2>人氣冠軍</h2>
            </div>
            <div className="block-center">
              <Link to="/Introduce">
                <img src="" alt="" id="hotImg2" />
              </Link>
              <div className="block-text">
                <h2>除濕。漢方飲</h2>
                <ol>
                  <li>● 適合：久坐上班族、冷氣房久待者、環境潮濕調整體質、懶洋洋提不起勁者</li>
                  <li>● 成份介紹：100% 黑豆、薏仁、茯苓、甘草 嚴選純天然中藥材研磨</li>
                </ol>
              </div>
            </div>
            <div className="block-bottom">
              <div className="bottom-input">
                <Link to="/Shop">
                  <input type="button" value="立即購買"></input>
                </Link>
                <input type="button" value="加入購物車" onClick={hotAddLocalstorage}></input>
              </div>
              <div className="bottom-text">
                <h3>一盒10入</h3>
                <h3>$350</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="block-top">
              <img src="" alt="" id="hotImg3" />
              <h2>女生喜愛的口味</h2>
            </div>
            <div className="block-center">
              <Link to="/Introduce">
                <img src="" alt="" id="hotImg4" />
              </Link>
              <div className="block-text">
                <h2>纖美。漢方飲</h2>
                <ol>
                  <li>● 適合：排便不順暢者、需要幫助消化者、體內環保、需要退火降火氣者</li>
                  <li>● 成份介紹：100% 洛神、山楂、甘草 嚴選純天然中藥材研磨</li>
                </ol>
              </div>
            </div>
            <div className="block-bottom">
              <div className="bottom-input">
                <Link to="/Shop">
                  <input type="button" value="立即購買"></input>
                </Link>
                <input type="button" value="加入購物車" onClick={hotAddLocalstorage}></input>
              </div>
              <div className="bottom-text">
                <h3>一盒10入</h3>
                <h3>$350</h3>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="block-top">
              <img src="" alt="" id="hotImg5" />
              <h2>上班族必備</h2>
            </div>
            <div className="block-center">
              <Link to="/Introduce">
                <img src="" alt="" id="hotImg6" />
              </Link>
              <div className="block-text">
                <h2>助眠。漢方飲</h2>
                <ol>
                  <li>● 適合： 熬夜晚睡、上班壓力大、幫助入睡、年老長者</li>
                  <li>● 成份介紹：100% 浮小麥、紅棗、甘草 嚴選純天然中藥材研磨</li>
                </ol>
              </div>
            </div>
            <div className="block-bottom">
              <div className="bottom-input">
                <Link to="/Shop">
                  <input type="button" value="立即購買"></input>
                </Link>
                <input type="button" value="加入購物車" onClick={hotAddLocalstorage}></input>
              </div>
              <div className="bottom-text">
                <h3>一盒10入</h3>
                <h3>$350</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="block-top">
              <img src="" alt="" id="hotImg7" />
              <h2>電腦手機族必備</h2>
            </div>
            <div className="block-center">
              <Link to="/Introduce">
                <img src="" alt="" id="hotImg8" />
              </Link>
              <div className="block-text">
                <h2>明亮。漢方飲</h2>
                <ol>
                  <li>● 適合：長期操作電腦、超時看電視、長時看書、看得很吃力、需要退火.降火氣</li>
                  <li>● 成份介紹：100% 菊花、枸杞、玉竹、決明子、甘草 嚴選純天然中藥材研磨</li>
                </ol>
              </div>
            </div>
            <div className="block-bottom">
              <div className="bottom-input">
                <Link to="/Shop">
                  <input type="button" value="立即購買"></input>
                </Link>
                <input type="button" value="加入購物車" onClick={hotAddLocalstorage}></input>
              </div>
              <div className="bottom-text">
                <h3>一盒10入</h3>
                <h3>$350</h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Hot
