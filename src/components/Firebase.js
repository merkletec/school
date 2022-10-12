import firebase from 'firebase'
import { firebaseConfig } from './FirebaseKey'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore()

//建使用者資料
export function createUserInDB(Info) {
  const account = Info.email
  const password = Info.password

  firebase
    .auth()
    .createUserWithEmailAndPassword(account, password)
    .then((res) => {
      alert('註冊成功')
      db.collection('users')
        .add({
          email: account,
          password: password,
          name: Info.name,
          birthday: Info.birthday,
          country: Info.country,
          city: Info.city,
          address: Info.address,
          sex: Info.sex,
          lotteryState: Info.lotteryState,
          lotteryContent: Info.lotteryContent,
          lotteryUse: Info.lotteryUse,
          personUrl: Info.personUrl,
        })
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    })
    .catch((error) => {
      alert('註冊失敗')
      console.log(error)
    })
}
//從資料庫打包Items
export const items = (callback) => {
  const ref = db.collection('items')
  ref.get().then((querySnapshot) => {
    const allItems = []
    querySnapshot.forEach((doc) => {
      allItems.push({
        id: doc.id,
        imgUrl: doc.data().imgUrl,
        title: doc.data().title,
        introduce: doc.data().introduce,
      })
    })
    callback(allItems)
  })
}
//部落格資料庫引入
export const all = (callback) => {
  const ref = db.collection('blog')
  ref.get().then((querySnapshot) => {
    const blogs = []
    querySnapshot.forEach((doc) => {
      blogs.push({
        id: doc.id,
        imgUrl: doc.data().imgUrl,
        webUrl: doc.data().webUrl,
        title: doc.data().title,
        introduce: doc.data().introduce,
        sort: doc.data().sort,
      })
    })
    callback(blogs)
  })
}
//部落格資料庫引入分類
export const know = (name, callback) => {
  const ref = db.collection('blog')
  ref
    .where('sort', '==', name)
    .get()
    .then((querySnapshot) => {
      const blogs = []
      querySnapshot.forEach((doc) => {
        blogs.push({
          id: doc.id,
          imgUrl: doc.data().imgUrl,
          webUrl: doc.data().webUrl,
          title: doc.data().title,
          introduce: doc.data().introduce,
          sort: doc.data().sort,
        })
      })

      callback(blogs)
    })
}
export const findItems = (itemName, callback) => {
  const ref = db.collection('items')
  ref
    .where('name', '==', itemName)
    .get()
    .then((querySnapshot) => {
      const blogs = []
      querySnapshot.forEach((doc) => {
        blogs.push({
          id: doc.id,
          imgUrl: doc.data().imgUrl,
          title: doc.data().title,
          introduce: doc.data().introduce,
        })
      })

      callback(blogs)
    })
}
//載入SHOPLIST
export const lists = (email, callback) => {
  const ref = db.collection('shopLists')
  ref
    .where('mail', '==', email)
    .orderBy('訂單日期', 'desc')
    .get()
    .then((querySnapshot) => {
      const list = []
      querySnapshot.forEach((doc) => {
        list.push({
          items: doc.data().items,
          mail: doc.data().mail,
          id: doc.data().訂單編號,
          firebaseID: doc.id,
          date: doc.data().訂單日期,
          total: doc.data().總金額,
          listTotal: doc.data().購買項目,
          shopLists: doc.data().shopLists,
        })
      })
      callback(list)
    })
}
//購物清單
export function createShoplistsInDB(Info) {
  db.collection('shopLists')
    .add({
      mail: Info.mail,
      shopLists: Info.shopLists,
      總金額: Info.total,
      訂單日期: Info.date,
      訂單編號: Info.id,
      購買項目: Info.count,
    })
    .then(function (docRef) {
      console.log('Document written with ID: ', docRef.id)
    })
    .catch(function (error) {
      console.error('Error adding document: ', error)
    })
}
//feedback寫入資料庫
export const inputFirebase = (info) => {
  const ref = db.collection('feedBack')
  ref
    .add({
      name: info[0].name,
      phone: info[0].phone,
      email: info[0].email,
      text: info[0].text,
      sex: info[0].sex,
    })
    .then(() => {
      alert('遞交成功')
    })
}
//取得熱銷排行圖片
export function takeHotImg() {
  const storageRef = firebase.storage().ref()
  let hotImg1 = storageRef.child('image/hot1.png')
  hotImg1.getDownloadURL().then(function (url) {
    document.getElementById('hotImg1').src = url
  })
  let hotImg2 = storageRef.child('image/index-13.png')
  hotImg2.getDownloadURL().then(function (url) {
    document.getElementById('hotImg2').src = url
  })
  let hotImg3 = storageRef.child('image/hot2.png')
  hotImg3.getDownloadURL().then(function (url) {
    document.getElementById('hotImg3').src = url
  })
  let hotImg4 = storageRef.child('image/index-10.png')
  hotImg4.getDownloadURL().then(function (url) {
    document.getElementById('hotImg4').src = url
  })
  let hotImg5 = storageRef.child('image/hot3.png')
  hotImg5.getDownloadURL().then(function (url) {
    document.getElementById('hotImg5').src = url
  })
  let hotImg6 = storageRef.child('image/index-15.png')
  hotImg6.getDownloadURL().then(function (url) {
    document.getElementById('hotImg6').src = url
  })
  let hotImg7 = storageRef.child('image/hot4.png')
  hotImg7.getDownloadURL().then(function (url) {
    document.getElementById('hotImg7').src = url
  })
  let hotImg8 = storageRef.child('image/items-4.png')
  hotImg8.getDownloadURL().then(function (url) {
    document.getElementById('hotImg8').src = url
  })
}
//取得首頁圖片
export function takeIndexImg() {
  const indexImgAll = []

  for (let i = 1; i < 21; i++) {
    const indexImage = firebase
      .storage()
      .ref('image/index-' + i + '.png')
      .getDownloadURL()
      .then((fileUrl) => {
        return fileUrl
      })
    indexImgAll.push(indexImage)
  }
  return indexImgAll
}
//登出
export const logOut = (props) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      props.history.push('/')
    })
    .catch((error) => {
      console.log(error)
    })
}
//取得商品介紹圖片
export const takeIntroduceImg = (setImgUrl) => {
  const storageRef = firebase.storage().ref()
  let introImg1 = storageRef.child('image/introduce-1.jpg')
  introImg1.getDownloadURL().then(function (url) {
    document.getElementById('introImg1').src = url
  })
  let introImg2 = storageRef.child('image/introduce-2.png')
  introImg2.getDownloadURL().then(function (url) {
    document.getElementById('introImg2').src = url
  })
  let introImg3 = storageRef.child('image/introduce-3.jpg')
  introImg3.getDownloadURL().then(function (url) {
    document.getElementById('introImg3').src = url
  })
  let introImg4 = storageRef.child('image/introduce-4.png')
  introImg4.getDownloadURL().then(function (url) {
    document.getElementById('introImg4').src = url
  })
  let introImg5 = storageRef.child('image/index-13.png')
  introImg5.getDownloadURL().then(function (url) {
    document.getElementsByClassName('introImg5')[0].src = url
    setImgUrl(url)
  })
  let introImg6 = storageRef.child('image/introduce-6.png')
  introImg6.getDownloadURL().then(function (url) {
    document.getElementById('introImg6').src = url
  })
  let introImg7 = storageRef.child('image/index-15.png')
  introImg7.getDownloadURL().then(function (url) {
    document.getElementById('introImg7').src = url
  })
  let introImg8 = storageRef.child('image/items-4.png')
  introImg8.getDownloadURL().then(function (url) {
    document.getElementById('introImg8').src = url
  })
  let introImg9 = storageRef.child('image/index-12.png')
  introImg9.getDownloadURL().then(function (url) {
    document.getElementById('introImg9').src = url
  })
  let introImg10 = storageRef.child('image/index-14.png')
  introImg10.getDownloadURL().then(function (url) {
    document.getElementById('introImg10').src = url
  })
  let introImg11 = storageRef.child('image/index-13.png')
  introImg11.getDownloadURL().then(function (url) {
    document.getElementById('introImg11').src = url
  })
}
//登入
export function signIn(account, password, props) {
  if (account === '') {
    alert('請輸入帳號')
  } else if (password === '') {
    alert('請輸入密碼')
  } else {
    firebase
      .auth()
      .signInWithEmailAndPassword(account, password)
      .then((mes) => {
        // 隱藏登入區塊
        console.log(mes)
        alert('登入成功')
        props.history.push('/')
      })
      .catch((error) => {
        console.log(error)
        alert('帳號密碼有誤')
      })
  }
}
//忘記密碼
export const forgotPassword = (e, account) => {
  e.preventDefault()
  const auth = firebase.auth()
  firebase.auth().languageCode = 'zh-TW' // 發信模版改中文
  auth
    .sendPasswordResetEmail(account)
    .then(() => {
      window.alert('已發送信件至信箱，請按照信件說明重設密碼')
      window.location.reload()
    })
    .catch((error) => {})
}
//Google登入
export const googleLogIn = (props) => {
  const db = firebase.firestore()
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      let credential = result.credential
      let token = credential.accessToken
      let user = result.user

      alert('登入成功')

      db.collection('users')
        .doc(user.email)
        .set(
          {
            email: user.email,
            password: token,
            name: user.displayName,
            // birthday: '',
            country: '',
            city: '',
            address: '',
            sex: '',
            personUrl: user.photoURL,
            // lotteryState: false,
            // lotteryContent: '',
            // lotteryUse: false,
          },
          { merge: true }
        )
        .then(function (docRef) {})
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
      props.history.push('/')
    })
    .catch((error) => {
      let errorCode = error.code
      let errorMessage = error.message
      let email = error.email
      let credential = error.credential
      console.log(errorCode, errorMessage, email, credential)
      alert('此信箱已註冊過')
    })
}
//FBlogin
export const FbLogin = (props) => {
  const db = firebase.firestore()
  const provider = new firebase.auth.FacebookAuthProvider()
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      let credential = result.credential
      let user = result.user
      let accessToken = credential.accessToken
      console.log(result)
      alert('登入成功')
      db.collection('users')
        .doc(user.email)
        .set(
          {
            email: user.email,
            password: accessToken,
            name: user.displayName,
            // birthday: '',
            country: '',
            city: '',
            address: '',
            sex: '',
            personUrl: user.photoURL,
            // lotteryState: false,
            // lotteryContent: '',
            // lotteryUse: false,
          },
          { merge: true }
        )
        .then(function (docRef) {})
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
      props.history.push('/')
    })
    .catch((error) => {
      let errorCode = error.code
      let errorMessage = error.message
      alert('此信箱已註冊過')
    })
}
//更新Lottery狀態 跟內容
export const changeLottery = (account, content) => {
  let id
  let db = firebase.firestore()
  let ref = db.collection('users')
  ref
    .where('email', '==', account)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        id = doc.id
        ref.doc(id).update({
          lotteryState: true,
          lotteryContent: content,
        })
      })
    })
}
//更新Lottery是否使用過
//更新Lottery狀態 跟內容
export const changeLotteryUse = (account) => {
  let id
  let db = firebase.firestore()
  let ref = db.collection('users')
  ref
    .where('email', '==', account)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        id = doc.id
        ref.doc(id).update({
          lotteryUse: true,
        })
      })
    })
}
//及時監聽LOttery 內容
// export const OnSnapShot = (account) => {
//   let id
//   let db = firebase.firestore()
//   let ref = db.collection('users')
//   const LotteryChange = []
//   ref
//     .where('email', '==', account)
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         id = doc.id
//         ref.doc(id).onSnapshot((doc) => {
//           LotteryChange.push({
//             lotteryContent: doc.data().lotteryContent,
//             lotteryState: doc.data().lotteryState,
//             lotteryUse: doc.data().lotteryUse,
//           })
//         })
//       })
//     })
//   return LotteryChange
// }

//會員資料修改
export const changeInformation = (info) => {
  let id
  let db = firebase.firestore()
  let ref = db.collection('users')
  ref
    .where('email', '==', info.email)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        id = doc.id
        ref.doc(id).update({
          birthday: info.birthday,
          name: info.name,
          address: info.address,
        })
      })
    })
}
