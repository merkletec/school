import React from 'react'
import './Index.scss'
import firebase from 'firebase'
import { firebaseConfig } from '../FirebaseKey'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { takeIndexImg } from '../Firebase'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
// import { faOtter } from '@fortawesome/free-solid-svg-icons'
const Index = ({ searchState, handleSetState }) => {
  const img1 = useRef(null)
  const img3 = useRef(null)
  const img4 = useRef(null)
  const img6 = useRef(null)
  const img7 = useRef(null)
  const img8 = useRef(null)
  const img9 = useRef(null)
  const img10 = useRef(null)
  const img11 = useRef(null)
  const img12 = useRef(null)
  const img13 = useRef(null)
  const img14 = useRef(null)
  const img15 = useRef(null)
  const img17 = useRef(null)
  const img18 = useRef(null)
  const img19 = useRef(null)
  const img20 = useRef(null)
  const framePic0 = useRef(null)
  const framePic1 = useRef(null)
  const framePic2 = useRef(null)
  const point = useRef(null)
  const point1 = useRef(null)
  const point2 = useRef(null)
  const [frameCount, setFrameCount] = useState(0)

  let count = 1
  const changeCount = () => {
    if (count % 3 === 0) {
      count = 0
    }
    setFrameCount(count)
    count++
  }
  const framePics = () => {
    if (frameCount === 0) {
      framePic0.current.style.opacity = '1'
      framePic1.current.style.opacity = '0'
      framePic2.current.style.opacity = '0'
      point.current.style.background = 'gray'
      point1.current.style.background = 'white'
      point2.current.style.background = 'white'
    } else if (frameCount === 1) {
      framePic0.current.style.opacity = '0'
      framePic1.current.style.opacity = '1'
      framePic2.current.style.opacity = '0'
      point.current.style.background = 'white'
      point1.current.style.background = 'gray'
      point2.current.style.background = 'white'
    } else if (frameCount === 2) {
      framePic0.current.style.opacity = '0'
      framePic1.current.style.opacity = '0'
      framePic2.current.style.opacity = '1'
      point.current.style.background = 'white'
      point1.current.style.background = 'white'
      point2.current.style.background = 'gray'
    }
  }
  const getPoint = (e) => {
    setFrameCount(e.target.index)
  }
  useEffect(() => {
    point.current.index = 0
    point1.current.index = 1
    point2.current.index = 2
  }, [])
  useEffect(() => {
    setInterval(changeCount, 2000)
  }, [])
  useEffect(() => {
    framePics()
  }, [frameCount])
  useEffect(() => {
    Promise.all(takeIndexImg())
      .catch((err) => {
        console.log('error', err)
      })
      .then((urls) => {
        for (let i = 0; i <= urls.length - 1; i++) {
          img1.current.src = urls[0]
          img3.current.src = urls[2]
          img4.current.src = urls[3]
          img6.current.src = urls[5]
          img7.current.src = urls[6]
          img8.current.src = urls[7]
          img9.current.src = urls[8]
          img10.current.src = urls[9]
          img11.current.src = urls[10]
          img12.current.src = urls[11]
          img13.current.src = urls[12]
          img14.current.src = urls[13]
          img15.current.src = urls[14]
          img17.current.src = urls[16]
          img18.current.src = urls[17]
          img19.current.src = urls[18]
          img20.current.src = urls[19]
        }
      })
  }, [])
  return (
    <div>
      {/* <div className={searchState ? 'allScreen' : null} onClick={() => handleSetState(false)}> */}
      <div>
        <div className="frame-pic">
          <div className="blog">
            <div className="frame frame-pic1" ref={framePic0}>
              <img src="" alt="" id="img1" ref={img1} />
              <div className="frame-pic-text">
                <h1>給生活一杯</h1>
                <h1>保養健康茶飲</h1>
                <p>打破傳統思維 。漢方飲也可以很好喝</p>
              </div>
            </div>
            <div className="frame frame-pic2" ref={framePic1}>
              <img src="" alt="" id="img3" ref={img3} />
            </div>
            <div className="frame frame-pic3" ref={framePic2}>
              <img src="" alt="" id="img4" ref={img4} />
              <div className="frame-pic3-text">
                <h1>老祖宗的漢方智慧</h1>
                <h1>給生活一帖良方</h1>
              </div>
            </div>
          </div>
          <ul>
            <li ref={point} onClick={getPoint}>
              <a href="###"></a>
            </li>
            <li ref={point1} onClick={getPoint}>
              <a href="###"></a>
            </li>
            <li ref={point2} onClick={getPoint}>
              <a href="###"></a>
            </li>
          </ul>
          <Link to="/Items">
            <input type="button" value="立即購買"></input>
          </Link>
        </div>
        <div className="main-story">
          <div className="main-story-text">
            <h2>品牌故事</h2>
            <p>
              喚醒逐漸淡忘的老智慧
              <br />
              一天一杯不吃苦
              <br />
              讓漢方輕茶飲來呵護你
            </p>
            <Link to="/Story">
              <input type="button" value="了解更多"></input>
            </Link>
          </div>
        </div>
        <div className="main-discount">
          <div className="discount-top">
            <div className="discount-top-img">
              <img src="" alt="" id="img6" ref={img6} />
            </div>
            <h2>最新優惠你看過了嗎?</h2>
          </div>
          <ul>
            <li>
              <img src="" alt="" id="img7" ref={img7} />
              <h2>限時滿$399免運費</h2>
              <p>活動至2020/11/8截止</p>
            </li>
            <li id="discount-block-two">
              <h2>\暖慶元旦假期/</h2>
              <h2>
                限定茶飲<span>八</span>折起
              </h2>
              <p>即日起~11/11截止</p>
            </li>
            <li>
              <img src="" alt="" id="img8" ref={img8}></img>
              <img src="" alt="" id="img9" ref={img9}></img>
              <h2>滿額贈 品牌吸管組</h2>
              <p>數量有限 送完為止</p>
            </li>
          </ul>
        </div>
        <div className="step">
          <h1>簡單享受漢方茶飲</h1>
          <div className="step-block">
            <div className="step-block1">
              <div>1</div>
              <img src="" alt="" id="img17" ref={img17} />
              <p>
                將茶包放入杯中，
                <br />
                加入100°的熱水350ml
              </p>
            </div>
            <div className="step-block1">
              <div>2</div>
              <img src="" alt="" id="img18" ref={img18} />
              <p>
                靜置5分鐘，
                <br />
                等待藥材完全釋放
              </p>
            </div>
            <div className="step-block1">
              <div>3</div>
              <img src="" alt="" id="img20" ref={img20} />
              <p>可回沖2~3次</p>
            </div>
            <div className="step-block1">
              <div>4</div>
              <img src="" alt="" id="img19" ref={img19} />
              <p>養成一天一包的良好習慣</p>
            </div>
          </div>
        </div>
        <div className="main-items">
          <h2>精選漢方茶飲</h2>
          <ul>
            <li>
              <img src="" alt="" id="img10" ref={img10}></img>
              <p>適合 : 暴飲暴食去油膩、想體態輕盈、易腸胃脹氣者的日常茶飲。</p>
              <Link to="/Introduce">
                <input type="button" value="Read more"></input>
              </Link>
            </li>
            <li>
              <img src="" alt="" id="img11" ref={img11}></img>
              <p>適合 : 靠聲音吃飯，為您全方面護嗓，遠離沙啞。</p>
              <Link to="/Introduce">
                <input type="button" value="Read more"></input>
              </Link>
            </li>
            <li>
              <img src="" alt="" id="img12" ref={img12}></img>
              <p>適合 : 想增加免疫力、抵抗力及延緩衰老的你。</p>
              <Link to="/Introduce">
                <input type="button" value="Read more"></input>
              </Link>
            </li>
            <li>
              <img src="" alt="" id="img13" ref={img13}></img>
              <p>適合 : 想消除一天水腫，並有效排除身體濕氣。</p>
              <Link to="/Introduce">
                <input type="button" value="Read more"></input>
              </Link>
            </li>
            <li>
              <img src="" alt="" id="img14" ref={img14}></img>
              <p>適合 : 想要氣色紅潤與愛美女性平時的日常茶飲首選。</p>
              <Link to="/Introduce">
                <input type="button" value="Read more"></input>
              </Link>
            </li>
            <li>
              <img src="" alt="" id="img15" ref={img15}></img>
              <p>適合： 熬夜晚睡、上班壓力大、幫助入睡、年老長者。</p>
              <Link to="/Introduce">
                <input type="button" value="Read more"></input>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Index
