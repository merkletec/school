// import './components/common.css'
import Header from './components/Header'
import Footer from './components/Footer'
import FooterTrip from './components/FooterTrip'
// import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import Create from './components/Create/Create'
import Hot from './components/Hot/Hot'
import Index from './components/Index/Index'
import Introduce from './components/Introduce/Introduce'
import Items from './components/Items/Items'
import News from './components/News/News'
import Person from './components/Person/Person'
import Problem from './components/Problem/Problem'
import Shop from './components/Shop/Shop'
import Story from './components/Story/Story'
import Lottery from './components/Lottery/Lottery'
import Information from './components/Information/Information'
import Mobile from './components/Mobile'
import { Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import firebase from 'firebase'
import { firebaseConfig } from './components/FirebaseKey'
import { findItems } from './components/Firebase'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { AddInformation } from './redux/action'
function App() {
  const dispatch = useDispatch()
  const [searchState, setSearchState] = useState(false)
  const handleSetState = (state) => {
    setSearchState(state)
  }
  //確認localstorage 資料
  const defaultInformation = [
    {
      email: '',
      password: '',
      name: '',
      birthday: '',
      country: '',
      city: '',
      address: '',
      sex: '',
      lotteryState: false,
      lotteryContent: '',
      lotteryUse: false,
      personUrl: '',
    },
  ]
  const [information, setInformation] = useState(defaultInformation)
  const [status, setStatus] = useState(false)
  const [findItem, setFindItdm] = useState([])
  const handleFindItem = (data) => {
    setFindItdm(data)
  }
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
    let userLogin
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        userLogin = user
        // console.log('User is logined', user)
        let db = firebase.firestore()
        let ref = db.collection('users')
        ref
          .where('email', '==', user.email)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              setInformation(() => {
                return [
                  {
                    email: doc.data().email,
                    password: doc.data().password,
                    name: doc.data().name,
                    birthday: doc.data().birthday,
                    country: doc.data().country,
                    city: doc.data().city,
                    address: doc.data().address,
                    sex: doc.data().sex,
                    personUrl: doc.data().personUrl,
                    lotteryState: doc.data().lotteryState,
                    lotteryContent: doc.data().lotteryContent,
                    lotteryUse: doc.data().lotteryUse,
                  },
                ]
              })
              dispatch(
                AddInformation({
                  email: doc.data().email,
                  password: doc.data().password,
                  name: doc.data().name,
                  birthday: doc.data().birthday,
                  country: doc.data().country,
                  city: doc.data().city,
                  address: doc.data().address,
                  sex: doc.data().sex,
                  personUrl: doc.data().personUrl,
                  lotteryState: doc.data().lotteryState,
                  lotteryContent: doc.data().lotteryContent,
                  lotteryUse: doc.data().lotteryUse,
                })
              )
            })
          })
        setStatus(true)
      } else {
        userLogin = null
        setStatus(false)

        console.log('User is not logined yet.')
      }
    })
  }, [])
  return (
    <div>
      <Header status={status} handleSetState={handleSetState} />
      <div className={searchState ? 'allScreen' : null} onClick={() => handleSetState(false)}></div>
      <div className={searchState ? 'searchBox' : null} style={{ display: searchState ? null : 'none' }}>
        <input
          type="text"
          size="30"
          placeholder="輸入關鍵字..."
          onChange={(e) => findItems(e.target.value, handleFindItem)}
        />
        <p>搜尋結果</p>
        <ul>
          {findItem.map((marker) => (
            <Link to="/Introduce">
              <li id={marker.id}>
                <img src={marker.imgUrl} alt=""></img>
                <h2>{marker.title}</h2>
                <p>{marker.introduce}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Switch>
        <Route path="/" exact>
          <Index searchState={searchState} handleSetState={handleSetState} />
        </Route>
        
        <Route path="/Contact" exact>
          <Contact />
        </Route>
        <Route path="/Create" exact>
          <Create />
        </Route>
        <Route path="/Hot" exact>
          <Hot />
        </Route>
        <Route path="/Introduce" exact>
          <Introduce />
        </Route>
        <Route path="/Items" exact>
          <Items />
        </Route>
        <Route path="/News" exact>
          <News />
        </Route>
        <Route path="/Person" exact>
          <Person />
        </Route>
        <Route path="/Problem" exact>
          <Problem />
        </Route>
        <Route path="/Shop" exact>
          <Shop information={information} status={status} />
        </Route>
        <Route path="/Story" exact>
          <Story />
        </Route>
        <Route path="/Information" exact>
          <Information information={information} setInformation={setInformation} />
        </Route>
      </Switch>
      <Mobile status={status} />
      <Lottery status={status} information={information} setInformation={setInformation} />
      <Footer />
      <FooterTrip />
    </div>
  )
}

export default App
