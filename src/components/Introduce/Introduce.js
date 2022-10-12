import React from 'react'
import './Introduce.scss'
import { Link } from 'react-router-dom'
import Path from '../../img/Path 1.png'
import left from '../../img/left-chevron.png'
import right from '../../img/right-arrow.png'
import { useEffect, useState, useRef } from 'react'
import { addLocalstorage } from '../AddLocalStorage'
import { takeIntroduceImg } from '../Firebase'
const Introduce = () => {
  const [count, setCount] = useState(0)
  const [imgUrl, setImgUrl] = useState('')
  const [oneBox, setOneBox] = useState(false)
  const [fiveBoxes, setFiveBoxes] = useState(false)
  const [changeOptions, setChangeOptions] = useState(true)
  const content = useRef(null)
  const itemsCount = useRef(null)
  const price1 = useRef(null)
  const relativeUl = useRef(null)
  const leftButton = useRef(null)
  const rightButton = useRef(null)
  const liWidth = useRef(null)
  const handleSetLocalStorage = () => {
    const info = {
      name: content.current.innerHTML,
      count: itemsCount.current.innerHTML,
      price: price1.current.innerHTML,
    }
    addLocalstorage(info)
  }
  function easyChangeCountOne(num, e) {
    setCount(num)
    setOneBox(true)
    setFiveBoxes(false)
  }
  function easyChangeCountFive(num, e) {
    setCount(num)
    setOneBox(false)
    setFiveBoxes(true)
  }
  function changeCount(e) {
    setCount(e.target.value)
    setOneBox(false)
    setFiveBoxes(false)
  }
  function imgChange(e) {
    setImgUrl(e.target.src)
  }
  function slidePic(offset) {
    let newLeft = parseInt(relativeUl.current.style.left) + offset
    if (newLeft < -2 * liWidth.current.offsetWidth) {
      relativeUl.current.style.left = -liWidth.current + 'px'
    } else if (newLeft > 0) {
      relativeUl.current.style.left = 0 + 'px'
    } else {
      relativeUl.current.style.left = newLeft + 'px'
    }
  }
  useEffect(() => {
    takeIntroduceImg(setImgUrl)
  }, [])
  return (
    <div className="introduce">
      <div className="bread">
        <Link to="/Items">全部商品</Link> / <Link to="/Introduce">產品介紹</Link>
      </div>

      <div className="title">
        <h1>商品介紹</h1>
        <img src={Path} alt=""></img>
      </div>

      <div className="introduce-main">
        <div className="intro-top">
          <div className="intro-blockleft">
            <ul>
              <li>
                <img
                  src=""
                  alt=""
                  className="block"
                  id="introImg1"
                  onClick={imgChange}
                  style={{ cursor: 'pointer' }}
                ></img>
              </li>
              <li>
                <img
                  src=""
                  alt=""
                  className="block"
                  id="introImg2"
                  onClick={imgChange}
                  style={{ cursor: 'pointer' }}
                ></img>
              </li>
              <li>
                <img
                  src=""
                  alt=""
                  className="block"
                  id="introImg3"
                  onClick={imgChange}
                  style={{ cursor: 'pointer' }}
                ></img>
              </li>
              <li>
                <img
                  src=""
                  alt=""
                  className="block"
                  id="introImg4"
                  onClick={imgChange}
                  style={{ cursor: 'pointer' }}
                ></img>
              </li>
              <li>
                <img src="" alt="" className="block introImg5" onClick={imgChange} style={{ cursor: 'pointer' }}></img>
              </li>
            </ul>
          </div>

          <div className="intro-blockcenter" id="mainPic">
            <img src={imgUrl} className="" alt=""></img>
          </div>

          <div className="intro-blockright">
            <h3>【除濕漢方飲】</h3>
            <h2 ref={content}>除濕輕。茶飲</h2>
            <p> 漢方茶包（1盒10入）</p>

            <div className="block-quantity">
              <p>
                組合: <span ref={itemsCount}> {count} </span>盒
              </p>
              <div>
                <span className={oneBox ? 'selectColor' : null} onClick={(e) => easyChangeCountOne(1, e)}>
                  1盒
                </span>
                <span className={fiveBoxes ? 'selectColor' : null} onClick={(e) => easyChangeCountFive(5, e)}>
                  5盒
                </span>
              </div>
            </div>

            <div className="price">
              <span>
                價格
                <span ref={price1}>{count * 350}</span>
                <span>{count * 400}</span>
              </span>
            </div>

            <div className="count">
              <select name="coumt-block" onChange={changeCount} defaultValue={'howMany'}>
                <option value="howMany">請選擇你要幾盒商品</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="intro-button">
              <Link to="/Shop">
                <input type="button" value="立即購買"></input>
              </Link>
              <input type="button" value="加入購物車" onClick={handleSetLocalStorage}></input>
            </div>
          </div>
        </div>

        <ul className="describle-title">
          <li>
            <p onClick={() => setChangeOptions(true)}>商品描述</p>
          </li>
          <li>
            <p onClick={() => setChangeOptions(false)}>送貨付款方式</p>
          </li>
        </ul>

        <div className="product-describe" id="block1" style={{ display: changeOptions ? null : 'none' }}>
          <h3>商品描述</h3>
          <img src="" alt="" id="introImg6"></img>

          <div className="describle-block">
            <div className="describle-block1">
              <p>【嚴選純天然中藥材低溫烘培研磨製成】冷泡熱泡都OK!</p>
              <ul>
                <li>黑豆｜含有花青素、蛋白質、胡蘿蔔素、維生素B及B1</li>
                <li>薏米｜利水去濕、维生素E可抗氧化、增進皮膚與血球健康</li>
                <li>茯苓｜被譽為「四時神藥」，養顏美容、幫助睡眠</li>
                <li>甘草｜潤喉、天然甜味配方</li>
              </ul>
            </div>
            <div className="describle-block2">
              <p>【飲用指南】</p>
              <ul>
                <li> 適合：身體易疲倦、易水腫、頭皮跟皮膚易出 油、四肢瘦瘦卻胖小腹的你、久坐下半身循環不好的你</li>
              </ul>
              <p>注意事項</p>
              <ul>
                <li>痛風困擾、腎臟病患者不適合飲用</li>
                <li>感冒、發燒、腹瀉期間不適合飲用</li>
                <li>生理期間、孕婦、哺乳期間不適合飲用</li>
              </ul>
            </div>
            <div className="describle-block3">
              <p>▎若您有下列情況，建議先詢問醫師</p>
              <ol>
                <li>正值孕期或哺乳期：如果正在懷孕或哺乳。</li>
                <li>正在服用其他藥物：包括不須處方、坊間購買的成藥或指示藥物。</li>
                <li>對任何含有藥材的物質過敏：或者對其他藥物、草藥過敏。</li>
                <li>本身患有其他疾病：例如生理系統失調，或有其他任何健康狀況。</li>
              </ol>
              <p>❖ 飲用後身體如有任何不適，請立即暫停使用。</p>
            </div>
            <div className="describle-block4">
              <ul>
                <li>保存期限:2年</li>
                <li>保存方式:</li>
                <li>未開封兩年；不添加防腐劑，開封後請儘速飲用，避免受潮。</li>
                <li>製造日期:見產品上標示</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="deliver" id="block2" style={{ display: changeOptions ? 'none' : null }}>
          <h3>送貨及付款方式</h3>
          <div className="deliver-block">
            <div className="deliver-left">
              <p>送貨方式</p>
              <ul>
                <li>7-11 超商純取貨</li>
                <li>台灣本島地區-宅配到府（台灣宅配通</li>
                <li>台灣離島地區-宅配到府（中華郵政）</li>
                <li>7-11取貨付款</li>
                <li>Hong Kong 香港地區/貨到付運費（送貨需要2－3日）</li>
                <li>Japan 日本地區（送貨需要5－14日）</li>
                <li>United States 美國地區（送貨需要30－45日）</li>
              </ul>
            </div>
            <div className="deliver-right">
              <p>付款方式</p>
              <ul>
                <li>7-11取貨付款</li>
                <li>信用卡快速付款，支援國內外Visa, Master, JCB,簽帳卡</li>
                <li>宅配貨到付款</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative-pro" id="relative">
          <h3>相關產品</h3>
          <img
            src={left}
            alt=""
            className="left"
            ref={leftButton}
            onClick={() => slidePic(liWidth.current.offsetWidth)}
          />
          <ul style={{ marginLeft: 0, left: 0 }} ref={relativeUl}>
            <li ref={liWidth}>
              <Link to="/Introduce">
                <img src="" alt="" id="introImg7"></img>
                <p>助眠。漢方飲</p>
                <p>適合： 熬夜晚睡、上班壓力大、幫助入睡</p>
              </Link>
            </li>
            <li>
              <Link to="/Introduce">
                <img src="" alt="" id="introImg8"></img>
                <p>明亮。漢方飲</p>
                <p> 適合：長期操作電腦、超時看電視、長時看書</p>
              </Link>
            </li>
            <li>
              <Link to="/Introduce">
                <img src="" alt="" id="introImg9"></img>
                <p>精神。漢方飲</p>
                <p>適合 : 想增加免疫力、延緩衰老的你</p>
              </Link>
            </li>
            <li>
              <Link to="/Introduce">
                <img src="" alt="" id="introImg10"></img>
                <p>亮妍輕。茶飲</p>
                <p>適合 : 想要氣色紅潤與愛美女性平時的日常茶飲首選</p>
              </Link>
            </li>
            <li>
              <Link to="/Introduce">
                <img src="" alt="" id="introImg11"></img>
                <p>除濕輕。茶飲</p>
                <p>適合 : 想消除一天水腫，並有效排除身體濕氣</p>
              </Link>
            </li>
          </ul>
          <img
            src={right}
            alt=""
            className="right"
            ref={rightButton}
            onClick={() => slidePic(-liWidth.current.offsetWidth)}
          />
        </div>
      </div>
    </div>
  )
}
export default Introduce
