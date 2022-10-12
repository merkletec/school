import React from 'react'
import './Information.scss'
import firebase from 'firebase'
import { withRouter } from 'react-router'
import { useState, useRef } from 'react'
import defaultImg from '../../img/iconfinder_v-33_3162613.png'
import { lists, logOut, changeInformation } from '../Firebase'
import { v4 as uuidv4 } from 'uuid'
import { urlencoded } from 'body-parser'

const Information = (props) => {
  const [listState, setListState] = useState(true)
  const [editState, setEditState] = useState(false)
  const [list, setList] = useState([])
  const [img, setImg] = useState('')
  const { information, setInformation } = props
  const userName = useRef(null)
  const userBirthday = useRef(null)
  const userAddress = useRef(null)

  const handleSetListState = () => {
    if (listState == true) {
      setListState(false)
      lists(information[0].email, handleSetList)
    } else {
      setListState(true)
    }
  }
  const handleSetList = (data) => {
    setList(data)
  }

  const handleLogout = () => {
    if (window.confirm('是否將目前帳戶登出?')) {
      logOut(props)
    }
  }
  const handleChangeEdit = () => {
    setEditState(!editState)
    const nameValue = userName.current.value
    const birthdayValue = userBirthday.current.value
    const addressValue = userAddress.current.value
    const userInfo = {
      email: information[0].email,
      name: nameValue,
      birthday: birthdayValue,
      address: addressValue,
    }
    const changeInfo = [
      {
        email: information[0].email,
        password: information[0].password,
        name: nameValue,
        birthday: birthdayValue,
        country: information[0].country,
        city: information[0].city,
        address: addressValue,
        sex: information[0].sex,
        lotteryState: information[0].lotteryState,
        lotteryContent: information[0].lotteryContent,
        lotteryUse: information[0].lotteryUse,
        personUrl: information[0].personUrl,
      },
    ]
    changeInformation(userInfo)
    setInformation(changeInfo)
  }

  return (
    <div className="InformationDiv">
      <div className="memberInformation">
        <div
          className="defaultImg"
          style={{
            backgroundImage: `url(${information[0].personUrl ? information[0].personUrl : defaultImg})`,
          }}
        ></div>
        <div className="topInformation" style={{ display: editState ? 'none' : '' }}>
          <div className="basic">
            <p>
              姓名:<span>{information[0].name}</span>
            </p>
            <p>
              生日:<span>{information[0].birthday}</span>
            </p>
          </div>
          <div className="email">
            Email:<p>{information[0].email}</p>
          </div>
          <div className="address">
            Address:<p> {information[0].address}</p>
          </div>
        </div>
        <div className="changetopInformation" style={{ display: editState ? '' : 'none' }}>
          <div className="basic">
            <p>
              姓名:
              <input type="text" defaultValue={information[0].name} ref={userName} id="name" />
            </p>
            <p>
              生日:
              <input
                type="date"
                defaultValue={information[0].birthday}
                min="1911-01-01"
                max="2100-12-31"
                step="1"
                ref={userBirthday}
              />
            </p>
          </div>
          <div className="email">
            Email:<p>{information[0].email}</p>
          </div>
          <div className="address">
            Address:
            <br /> <input type="text" defaultValue={information[0].address} ref={userAddress} />
          </div>
        </div>
        <div className="button">
          <button type="button" onClick={() => handleChangeEdit()}>
            修改資訊
          </button>
          <button type="button" onClick={() => handleLogout()}>
            登出
          </button>
        </div>
      </div>
      <div className="coupon" data-attr={information[0].lotteryUse ? '已使用過' : '尚未使用'}>
        {information[0].lotteryContent}
      </div>
      <div className="memberShopList ">
        <button type="button" onClick={handleSetListState} style={{ marginBottom: '10px' }}>
          已付款訂單
        </button>
        <ul className={` listOutLine ${listState ? 'close' : ''}`}>
          {list.map((marker) => (
            <li className="outLine " key={marker.firebaseID}>
              <ul>
                <li>訂單編號:{marker.id}</li>
                <li>訂單日期:{marker.date}</li>
                <li>購買幾項:{marker.listTotal}</li>
                <li>
                  商品明細
                  <ul>
                    {marker.shopLists.map((shopList) => (
                      <li key={uuidv4()}>
                        <p>
                          品項名稱:{shopList.item} 購買個數:{shopList.amount} 金額:{shopList.amount * 350}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>總金額:{marker.total}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default withRouter(Information)
