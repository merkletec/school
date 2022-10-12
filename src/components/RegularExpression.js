export const handleInputAccount = (e, setMesAccount, setAccount) => {
  let isMail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
  if (e.target.value == '') {
    setMesAccount('')
  } else if (!isMail.test(e.target.value)) {
    setMesAccount('請輸入正確格式')
  } else {
    setMesAccount('')
  }
  setAccount(e.target.value)
}

export const handleInputPassword = (e, setMesPassword, setPassword) => {
  let isText = /^[a-z0-9]+$/
  if (e.target.value === '') {
    setMesPassword('')
  } else if (!isText.test(e.target.value)) {
    setMesPassword('勿含特殊字元')
  } else if (e.target.value.length < 6) {
    setMesPassword('請勿少於6個字')
  } else if (e.target.value.length > 12) {
    setMesPassword('請勿超過12個字')
  } else {
    setMesPassword('')
  }
  setPassword(e.target.value)
}
