import React from 'react'
import './Shop.scss'
import Delete from '../../img/trash.png'
import Path from '../../img/Path 1.png'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { createShoplistsInDB, changeLotteryUse } from '../Firebase'
import { icon } from '../AddLocalStorage'

const Shop = ({ information, status }) => {
  const [localStorageState, setLocatState] = useState(true)
  const [shopList, setShopList] = useState([])
  const [finalPrice, setFinalPrice] = useState(0)
  const [shipping, setShipping] = useState(70)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userIphone, setUserIphone] = useState('')
  const [userAddress, setUserAddress] = useState('')
  const [userTime, setUserTime] = useState('morning')
  const [paymentState, setPaymenyState] = useState(false)
  const [localStorageStatus, setLocalStorage] = useState(false)
  const [lotteryUse, setLotteryUse] = useState(false)
  const [discount, setDiscount] = useState('')

  //撈LOCALSTORAGE
  useEffect(() => {
    const task = []
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    if (tasks == null) {
      setLocatState(true)
    } else {
      setLocatState(false)
      tasks.forEach((element) => {
        task.push({
          count: element.count,
          item_id: element.item_id,
          name: element.name,
          price: element.price,
        })
      })
    }
    setShopList(task)
  }, [localStorageStatus])

  const lists = []
  let allPrice = 0
  shopList.forEach((element) => {
    lists.push({
      count: element.count,
      item_id: element.item_id,
      name: element.name,
      price: element.price,
    })
    allPrice += parseInt(element.price)
  })

  useEffect(() => {
    if (allPrice > 350) {
      setFinalPrice(allPrice)
      setShipping(0)
    } else {
      setFinalPrice(allPrice)
      setShipping(70)
    }
  }, [shopList])

  //數量onchange改變事件
  const handleOnchange = (e) => {
    const changeCount = e.target.value
    const changePrice = changeCount * 350
    const changeId = e.target.parentNode.id
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.forEach(function (task, i) {
      if (changeId == task.item_id) {
        tasks[i].count = parseInt(changeCount)
        tasks[i].price = parseInt(changePrice)
      }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    setLocalStorage(!localStorageStatus)
  }
  //刪除
  const handleDelete = (e) => {
    const targetLi = e.target.parentNode.parentNode
    const changeId = e.target.parentNode.parentNode.id
    const confirmAgain = window.confirm('你確定嗎？')
    if (confirmAgain) {
      setTimeout(function () {
        targetLi.remove()
      }, 500)
    }
    const newTasks = []
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.forEach(function (task, i) {
      if (changeId != task.item_id) {
        newTasks.push(task)
      }
    })
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    setLocalStorage(!localStorageStatus)
    icon()
  }
  //更改收件資料
  const hangleChangeName = (e) => {
    setUserName(e.target.value)
  }
  const hangleChangeEmail = (e) => {
    setUserEmail(e.target.value)
  }
  const hangleChangeIphone = (e) => {
    setUserIphone(e.target.value)
  }
  const hangleChangeAddress = (e) => {
    setUserAddress(e.target.value)
  }
  const hangleChangeTime = (e) => {
    setUserTime(e.target.value)
  }
  //寫入firebase
  const writeInFirebase = () => {
    let shopLists = []
    let shopCount = 0
    shopList.forEach((element, index) => {
      shopLists.push({
        amount: element.count,
        item: element.name,
      })
      shopCount = index + 1
    })
    let day = new Date().getDate()
    let month = new Date().getMonth() + 1
    let year = new Date().getFullYear()
    const date = year + '/' + month + '/' + day
    let shopListID = uuidv4()
    let info = {
      mail: userEmail,
      shopLists: shopLists,
      total: finalPrice + shipping - discount,
      date: date,
      id: shopListID,
      count: shopCount,
    }
    if (status === true) {
      createShoplistsInDB(info)
      changeLotteryUse(information[0].email)
    } else {
      alert('請先登入')
    }
  }
  const handlePayment = () => {
    setPaymenyState(true)
  }
  const handleChangeLottery = (e) => {
    if (e.target.checked === true) {
      setLotteryUse(true)
      if (information[0].lotteryContent === '現金折抵100') {
        setDiscount('100')
      } else if (information[0].lotteryContent === '現金折抵200') {
        setDiscount('200')
      } else if (information[0].lotteryContent === '現金折抵50') {
        setDiscount('50')
      } else if (information[0].lotteryContent === '商品75折') {
        setDiscount(Math.round((finalPrice + shipping) * 0.25))
      } else if (information[0].lotteryContent === '商品85折') {
        setDiscount(Math.round((finalPrice + shipping) * 0.15))
      } else if (information[0].lotteryContent === '商品95折') {
        setDiscount(Math.round((finalPrice + shipping) * 0.05))
      }
    } else {
      setLotteryUse(false)
    }
  }

  return (
    <div className="shop">
      <div className="title1">
        <h1>購物車</h1>
        <img src={Path} alt=""></img>
      </div>
      <main>
        <div className="view">
          <div className="cart">
            <div className="row-title">
              <div className="name">品項</div>
              <div className="qty">數量</div>
              <div className="price">單價</div>
              <div className="subtotal">小計</div>
            </div>
            <div className="list" style={{ display: localStorageState ? null : 'none', textAlign: 'center' }}>
              <div>您尚未訂購任何商品</div>
            </div>
            <div className="list" style={{ display: localStorageState ? 'none' : null }}>
              {lists.map((marker) => (
                <div className="listCount" key={marker.item_id} id={marker.item_id}>
                  <p>{marker.name}</p>
                  <select onChange={(e) => handleOnchange(e)} defaultValue={parseInt(marker.count)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                  </select>
                  <p>
                    NT.<span>350</span>
                  </p>
                  <p>
                    NT.<span>{marker.price}</span>
                  </p>
                  <div className="deleteImg">
                    <img className="delete" src={Delete} alt="" onClick={handleDelete} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="target">
            <div className="country">
              <span className="text">配送國家</span>
              <select>
                <option className="area">台灣或離島</option>
              </select>
            </div>
            <div className="country">
              <span className="text">付款方式</span>
              <select>
                <option className="payment">信用卡付款</option>
                <option className="payment">貨到付款</option>
              </select>
            </div>
          </div>
          <div className="reminder">
            <div>※提醒您：</div>
            <div>● 請填寫正確收件人資訊，避免包裹配送不達</div>
            <div>● 請填寫正確收件人姓名 ( 與證件相符 )，避免無法領取</div>
          </div>
          <div className="recipient">
            <div className="title">收件資料</div>
            <div className="line">
              <div className="text">收件人姓名</div>
              <div className="input">
                <input
                  type="text"
                  id="recipient-name"
                  placeholder="必填"
                  value={userName}
                  onChange={(e) => hangleChangeName(e)}
                />
              </div>
            </div>
            <div className="line">
              <div className="text">Email</div>
              <div className="input">
                <input
                  type="text"
                  id="recipient-email"
                  placeholder="必填(範例:exaple@gmail.com)"
                  value={userEmail}
                  onChange={(e) => hangleChangeEmail(e)}
                />
              </div>
            </div>
            <div className="line">
              <div className="text">手機號碼</div>
              <div className="input">
                <input
                  type="text"
                  id="recipient-phone"
                  placeholder="必填(範例09XX-XXXXXX)"
                  onChange={(e) => hangleChangeIphone(e)}
                  value={userIphone}
                />
              </div>
            </div>
            <div className="line">
              <div className="text">收件地址</div>
              <div className="input">
                <input
                  type="text"
                  id="recipient-adress"
                  placeholder="必填"
                  value={userAddress}
                  onChange={(e) => hangleChangeAddress(e)}
                />
              </div>
            </div>
            <div className="line">
              <div className="text">配送時間</div>
              <div className="input">
                <label>
                  <input
                    type="radio"
                    value="moring"
                    name="recipient-time"
                    defaultChecked
                    onChange={(e) => hangleChangeTime(e)}
                  />
                  <span className="time">08:00 - 12:00</span>
                </label>
                <label>
                  <input type="radio" value="afternoon" name="recipient-time" onChange={(e) => hangleChangeTime(e)} />
                  <span className="time">14:00 - 18:00</span>
                </label>
                <label>
                  <input type="radio" value="anytime" name="recipient-time" onChange={(e) => hangleChangeTime(e)} />
                  <span className="time">不指定</span>
                </label>
              </div>
            </div>
          </div>
          <div className="payment">
            <div className="title">
              付款資料
              <button
                type="button"
                id="creditCard"
                onClick={handlePayment}
                style={{
                  display: paymentState ? 'none' : null,
                  marginLeft: '20px',
                  backgroundColor: '#4e342c',
                  width: '120px',
                }}
              >
                新增信用卡
              </button>
            </div>
            <div className="line" style={{ display: paymentState ? null : 'none' }}>
              <div className="text">信用卡號碼</div>
              <div className="input">
                <div className="tpfield" id="card-number"></div>
              </div>
            </div>
            <div className="line" style={{ display: paymentState ? null : 'none' }}>
              <div className="text">有效期限</div>
              <div className="input">
                <div className="tpfield" id="card-expiration-date"></div>
              </div>
            </div>
            <div className="line" style={{ display: paymentState ? null : 'none' }}>
              <div className="text">安全碼</div>
              <div className="input">
                <div className="tpfield" id="card-ccv"></div>
              </div>
            </div>
          </div>
          <div className="lottery" style={{ display: information[0].lotteryUse ? 'none' : null }}>
            <div className="title">優惠券</div>
            <div className="line">
              <input type="checkbox" onChange={handleChangeLottery} /> {information[0].lotteryContent}
            </div>
          </div>
          <div className="confirm">
            <div className="row">
              <div className="title">總金額</div>
              <div className="priceView">
                <span className="unit">NT.</span>
                <span id="subtotal">{finalPrice}</span>
              </div>
            </div>
            <div className="row">
              <div className="title">運費</div>
              <div className="priceView">
                <span className="unit">NT.</span>
                <span id="freight">{shipping}</span>
              </div>
            </div>
            <div className="row" style={{ display: lotteryUse ? '' : 'none' }}>
              <div className="title">優惠券</div>
              <div className="priceView">
                <span className="unit">-NT.</span>
                <span id="freight">{discount}</span>
              </div>
            </div>
            <div className="row">
              <div className="seperator"></div>
            </div>
            <div className="row">
              <div className="title">應付金額</div>
              <div className="priceView">
                <span className="unit">NT.</span>
                <span id="total">{finalPrice + shipping - discount}</span>
              </div>
            </div>
            <div className="row">
              <button id="submit-button" onClick={writeInFirebase}>
                確認付款
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Shop
