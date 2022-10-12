import lotteryPic from '../../img/wheel.png'
import './Lottery.scss'
import LottrryPage from './LottrryPage'
import { Fragment, useState } from 'react'
const Lottery = ({ status, information, setInformation }) => {
  const [pageState, setPageState] = useState(false)
  const handleSetPageState = () => {
    if ((status === true && information[0].lotteryState === false) || information[0].lotteryState === undefined) {
      setPageState(true)
    } else if (information[0].lotteryState === true) {
      alert('您已參加過抽獎!')
    } else {
      alert('請先註冊或登入會員!')
    }
  }
  return (
    <Fragment>
      <div
        className="lotteryBtn"
        onClick={() => {
          handleSetPageState()
        }}
      >
        <div className="lotteryContext">
          <img src={lotteryPic} alt="" />
          <ul>
            <li>抽抽樂開始！</li>
            <li>由此進入</li>
          </ul>
        </div>
      </div>
      <LottrryPage
        pageState={pageState}
        setPageState={setPageState}
        information={information}
        setInformation={setInformation}
      />
    </Fragment>
  )
}
export default Lottery
