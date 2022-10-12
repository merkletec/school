import React from 'react'
import './Problem.scss'
import {
  handleChangeState,
  handleChangeState1,
  handleChangeState2,
  handleChangeState3,
  handleChangeState4,
  handleChangeState5,
  handleChangeState6,
} from './controlProblem'
import { Link } from 'react-router-dom'
import Path from '../../img/Path 1.png'
import { useState } from 'react'
const Problem = () => {
  const [instate, setInstate] = useState(true)
  const [instate1, setInstate1] = useState(true)
  const [instate2, setInstate2] = useState(true)
  const [instate3, setInstate3] = useState(true)
  const [instate4, setInstate4] = useState(true)
  const [instate5, setInstate5] = useState(true)
  const [instate6, setInstate6] = useState(true)

  return (
    <div className="problem">
      <div className="title">
        <h1>常見問題Q&A</h1>
        <img src={Path} alt=""></img>
      </div>

      <div className="problem-block">
        <h2>最常見的七個問題</h2>
        <div className="block">
          <div className="block-top">
            <div className="block-img block-img1" onClick={(e) => handleChangeState(e, instate, setInstate)}></div>
            <h3>漢方茶怎麼沖泡呢？</h3>
          </div>
          <div className="block-dis-1" id="block-dis-1">
            <p>
              裝350ml的熱水，水的溫度不要到會燙傷食道，把茶包放進去之後，
              大約等個3~5分鐘，等待茶包釋放，顏色都出來後，可以把茶包拿起來，
              等喝完再進行第二泡，大概回沖三次之後味道會變越來越淡。
            </p>
          </div>
        </div>
        <div className="block">
          <div className="block-top">
            <div className="block-img block-img2" onClick={(e) => handleChangeState1(e, instate1, setInstate1)}></div>
            <h3>茶包該如何保存呢？</h3>
          </div>
          <div className="block-dis-1" id="block-dis-2">
            <p>
              中藥材保存三大禁忌就是：1.潮濕 2.高溫 3.陽光直射， 所以只要放在陰暗乾燥的地方就可以了喔，記得拿出茶包後，
              包裝要密封保存。
            </p>
          </div>
        </div>
        <div className="block">
          <div className="block-top">
            <div className="block-img block-img3" onClick={(e) => handleChangeState2(e, instate2, setInstate2)}></div>
            <h3>產品有沒有什麼樣的人不適合喝漢方茶或注意事項？</h3>
          </div>
          <div className="block-dis-1" id="block-dis-3">
            <ul>
              <li>▲精神：生理期間、孕婦、糖尿病、高血壓、心臟病患者與感冒期間不適合飲用</li>
              <li>
                ▲養聲：生理期間、孕婦、幼童、哺乳期間、高血壓、低血壓、 感冒引起之咳嗽、脾胃虛寒體質、過敏者不適合飲用
              </li>
              <li>▲明亮：生理期間、孕婦、哺乳期間不適合飲用，心臟病、高血壓不適合飲用</li>
              <li>▲女神：生理期間、孕婦、哺乳期間、空腹時不適合飲用</li>
              <li>▲助眠：生理期間、孕婦、哺乳期間不適合飲用</li>
              <li>▲月事：生理期間、孕婦、哺乳期間不適合飲用</li>
              <li>▲纖美：生理期間、孕婦、哺乳期間、空腹時不適合飲用</li>
              <li>▲除濕：生理期間、孕婦、哺乳期間不適合飲用</li>
            </ul>
          </div>
        </div>
        <div className="block">
          <div className="block-top">
            <div className="block-img block-img4" onClick={(e) => handleChangeState3(e, instate3, setInstate3)}></div>
            <h3>為什麼部分的未開封茶包會結成硬塊狀?</h3>
          </div>
          <div className="block-dis-1" id="block-dis-4">
            <p>
              因為樂木集的茶包是純天然的中藥材烘烤研磨，裡面是沒有任何添加物，
              而大多數中藥材原料即使烘乾還是會有黏性，像是紅棗、枸杞， 不過加入熱水中悶泡就恢復。
            </p>
          </div>
        </div>
        <div className="block">
          <div className="block-top">
            <div className="block-img block-img5" onClick={(e) => handleChangeState4(e, instate4, setInstate4)}></div>
            <h3>中藥的配方是經由誰調配？</h3>
          </div>
          <div className="block-dis-1" id="block-dis-5">
            <p> 主要是經由中藥行的中醫師，討論後多次調整研發完成。</p>
          </div>
        </div>
        <div className="block">
          <div className="block-top">
            <div className="block-img block-img6" onClick={(e) => handleChangeState5(e, instate5, setInstate5)}></div>
            <h3>為什麼要烘中藥材？</h3>
          </div>
          <div className="block-dis-1" id="block-dis-6">
            <p>
              低溫烘烤中藥材，有殺菌、消毒、清潔的效果之外，往往1公斤的紅棗烘烤後，
              就會少了3成左右，即便成本增加，卻也可以保住營養，讓材料味道更為濃郁， 如果沒有做此工序，藥材則容易受潮。
            </p>
          </div>
        </div>
        <div className="block">
          <div className="block-top">
            <div className="block-img block-img7" onClick={(e) => handleChangeState6(e, instate6, setInstate6)}></div>
            <h3> 為什麼茶包裏的中藥材是碎碎細細的?是不是用不好的中藥材？</h3>
          </div>
          <div className="block-dis-1" id="block-dis-7">
            <p>
              其實一開始也想過要讓客戶直接看到中藥的原型，這樣好像比較安心，
              但是我們試過完整藥材的茶包，沖泡的味道真的比較淡，中藥材沒有經過處理，
              只是用熱水悶泡，藥材成分釋放會有困難，所以我們特別設計出，透過烘焙研磨製
              成茶包，雖然它不是完整藥材的茶包，但是純天然的中藥材，加上有經過處理，味道與
              藥材成分才會有釋放，讓忙碌的上班族，也能透過短短5分鐘的沖泡，得到更好的照。
            </p>
          </div>
        </div>

        <div className="contact-block">
          <h2>聯絡我們</h2>
          <p>
            你可以來填寫
            <Link to="/Contact">表單</Link>
          </p>
          <p>或是致電線上購物客服電話：0916-369-062，我們將有專人為你處理線上購物相關問題。</p>
          <p>我們的電話客服服務時間為週一至週日 09:00~18:00，例假日照常服務。 </p>
          <hr />
          <div className="join-us">
            <h2>加入我們</h2>
            <a href="https://www.facebook.com/">
              <img src="" alt=""></img>
            </a>
            <a href="https://line.me/zh-hant/">
              <img src="" alt=""></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Problem
