export const handleChangeState = (e, instate, setInstate) => {
  let block = e.target.parentNode.nextElementSibling
  // let className = e.target.getAttribute('class').substring(10, 20)
  const style = document.createElement('style')
  document.head.appendChild(style)
  const sheet = style.sheet
  if (instate == true) {
    sheet.addRule('.block-img1::before', 'transform: rotate(90deg)')
    sheet.addRule('.block-img1::after', 'transform: rotate(180deg)')
    block.style.display = 'block'
    setInstate(false)
  } else {
    sheet.addRule('.block-img1::before', 'transform: rotate(180deg)')
    sheet.addRule('.block-img1::after', 'transform: rotate(360deg)')
    block.style.display = 'none'
    setInstate(true)
  }
}
export const handleChangeState1 = (e, instate1, setInstate1) => {
  let block = e.target.parentNode.nextElementSibling
  // let className = e.target.getAttribute('class').substring(10, 20)
  const style = document.createElement('style')
  document.head.appendChild(style)
  const sheet = style.sheet
  if (instate1 == true) {
    sheet.addRule('.block-img2::before', 'transform: rotate(90deg)')
    sheet.addRule('.block-img2::after', 'transform: rotate(180deg)')
    block.style.display = 'block'
    setInstate1(false)
  } else {
    sheet.addRule('.block-img2::before', 'transform: rotate(180deg)')
    sheet.addRule('.block-img2::after', 'transform: rotate(360deg)')
    block.style.display = 'none'
    setInstate1(true)
  }
}
export const handleChangeState2 = (e, instate2, setInstate2) => {
  let block = e.target.parentNode.nextElementSibling
  // let className = e.target.getAttribute('class').substring(10, 20)
  const style = document.createElement('style')
  document.head.appendChild(style)
  const sheet = style.sheet
  if (instate2 == true) {
    sheet.addRule('.block-img3::before', 'transform: rotate(90deg)')
    sheet.addRule('.block-img3::after', 'transform: rotate(180deg)')
    block.style.display = 'block'
    setInstate2(false)
  } else {
    sheet.addRule('.block-img3::before', 'transform: rotate(180deg)')
    sheet.addRule('.block-img3::after', 'transform: rotate(360deg)')
    block.style.display = 'none'
    setInstate2(true)
  }
}
export const handleChangeState3 = (e, instate3, setInstate3) => {
  let block = e.target.parentNode.nextElementSibling
  // let className = e.target.getAttribute('class').substring(10, 20)
  const style = document.createElement('style')
  document.head.appendChild(style)
  const sheet = style.sheet
  if (instate3 == true) {
    sheet.addRule('.block-img4::before', 'transform: rotate(90deg)')
    sheet.addRule('.block-img4::after', 'transform: rotate(180deg)')
    block.style.display = 'block'
    setInstate3(false)
  } else {
    sheet.addRule('.block-img4::before', 'transform: rotate(180deg)')
    sheet.addRule('.block-img4::after', 'transform: rotate(360deg)')
    block.style.display = 'none'
    setInstate3(true)
  }
}
export const handleChangeState4 = (e, instate4, setInstate4) => {
  let block = e.target.parentNode.nextElementSibling
  // let className = e.target.getAttribute('class').substring(10, 20)
  const style = document.createElement('style')
  document.head.appendChild(style)
  const sheet = style.sheet
  if (instate4 == true) {
    sheet.addRule('.block-img5::before', 'transform: rotate(90deg)')
    sheet.addRule('.block-img5::after', 'transform: rotate(180deg)')
    block.style.display = 'block'
    setInstate4(false)
  } else {
    sheet.addRule('.block-img5::before', 'transform: rotate(180deg)')
    sheet.addRule('.block-img5::after', 'transform: rotate(360deg)')
    block.style.display = 'none'
    setInstate4(true)
  }
}
export const handleChangeState5 = (e, instate5, setInstate5) => {
  let block = e.target.parentNode.nextElementSibling
  // let className = e.target.getAttribute('class').substring(10, 20)
  const style = document.createElement('style')
  document.head.appendChild(style)
  const sheet = style.sheet
  if (instate5 == true) {
    sheet.addRule('.block-img6::before', 'transform: rotate(90deg)')
    sheet.addRule('.block-img6::after', 'transform: rotate(180deg)')
    block.style.display = 'block'
    setInstate5(false)
  } else {
    sheet.addRule('.block-img6::before', 'transform: rotate(180deg)')
    sheet.addRule('.block-img6::after', 'transform: rotate(360deg)')
    block.style.display = 'none'
    setInstate5(true)
  }
}
export const handleChangeState6 = (e, instate6, setInstate6) => {
  let block = e.target.parentNode.nextElementSibling
  // let className = e.target.getAttribute('class').substring(10, 20)
  const style = document.createElement('style')
  document.head.appendChild(style)
  const sheet = style.sheet
  if (instate6 == true) {
    sheet.addRule('.block-img7::before', 'transform: rotate(90deg)')
    sheet.addRule('.block-img7::after', 'transform: rotate(180deg)')
    block.style.display = 'block'
    setInstate6(false)
  } else {
    sheet.addRule('.block-img7::before', 'transform: rotate(180deg)')
    sheet.addRule('.block-img7::after', 'transform: rotate(360deg)')
    block.style.display = 'none'
    setInstate6(true)
  }
}
