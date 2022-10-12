import './LotteryPage.scss'
import { useRef, useState, useEffect } from 'react'
import DeleteImg from '../../img/delete.png'
import { changeLottery, OnSnapShot } from '../Firebase'
const LottrryPage = ({ pageState, setPageState, information, setInformation }) => {
  const [discountContent, setDiscount] = useState('')
  const LotterBtn = useRef(null)
  const LottertDiscount = useRef(null)
  const discount = ['現金折抵200', '現金折抵100', '現金折抵50', '商品75折', '商品85折', '商品95折']
  const discountLength = discount.length
  let timeout
  function handleState() {
    if (LotterBtn.current.innerHTML === 'Start') {
      timeout = setInterval(function () {
        let random = parseInt(Math.random() * discountLength)
        let randomName = discount[random]
        LottertDiscount.current.innerHTML = randomName
      }, 50)
      LotterBtn.current.innerHTML = 'Stop'
    } else {
      clearInterval(timeout)
      LotterBtn.current.innerHTML = 'Start'
      LotterBtn.current.style.pointerEvents = 'none'
      LotterBtn.current.style.backgroundColor = 'lightgray'
      setDiscount(LottertDiscount.current.innerHTML)
      changeLottery(information[0].email, LottertDiscount.current.innerHTML)
      const changeInfo = [
        {
          email: information[0].email,
          password: information[0].password,
          name: information[0].name,
          birthday: information[0].birthday,
          country: information[0].country,
          city: information[0].city,
          address: information[0].address,
          sex: information[0].sex,
          lotteryState: information[0].lotteryState,
          lotteryContent: LottertDiscount.current.innerHTML,
          lotteryUse: information[0].lotteryUse,
          personUrl: information[0].personUrl,
        },
      ]
      setInformation(changeInfo)
      // setTimeout(function () {
      //   window.location.reload()
      // }, 1500)
    }
  }

  return (
    <div className="lotteryPage" style={{ display: pageState ? '' : 'none' }}>
      <img
        src={DeleteImg}
        onClick={() => {
          setPageState(false)
        }}
        alt=""
      />
      <div
        className="m-btn g-btn-start"
        onClick={() => {
          handleState()
        }}
        ref={LotterBtn}
      >
        Start
      </div>
      <div className="g-name" ref={LottertDiscount}>
        抽獎內容
      </div>
    </div>
  )
}
export default LottrryPage
