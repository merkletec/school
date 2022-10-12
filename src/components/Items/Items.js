import React from 'react'
import './Items.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import Path from '../../img/Path 1.png'
import { itemsAddLocalstorage } from '../AddLocalStorage'
import { items } from '../Firebase'
const Item = () => {
  const ul = useRef(null)
  const [events, setEvents] = useState([])
  useEffect(() => {
    function saveEventsInMap(data) {
      setEvents(data)
    }
    items(saveEventsInMap)
  }, [])
  // const allItems = []
  // events.forEach((event) => {
  //   allItems.push({
  //     id: event.id,
  //     imgUrl: event.imgUrl,
  //     title: event.title,
  //     introduce: event.introduce,
  //   })
  // })

  return (
    <div className="items">
      <div className="title">
        <h1>商品總覽</h1>
        <img src={Path} alt=""></img>
      </div>

      <div className="main">
        <ul ref={ul}>
          {events.map((marker) => (
            <li key={marker.id}>
              <Link to="/Introduce">
                <img src={marker.imgUrl} alt=""></img>
              </Link>
              <h2>{marker.title}</h2>
              <p>{marker.introduce}</p>
              <Link to="/Shop">
                <input type="button" value="立即購買"></input>
              </Link>
              <input type="button" value="加入購物車" onClick={itemsAddLocalstorage}></input>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Item
