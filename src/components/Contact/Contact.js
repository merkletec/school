import React from 'react'
import Path from '../../img/Path 1.png'
import './Contact.scss'
import { useRef } from 'react'
import { inputFirebase } from '../Firebase'
const Contact = () => {
  const contactName = useRef(null)
  const contactPhone = useRef(null)
  const contactEmail = useRef(null)
  const contactText = useRef(null)
  //寫進資料庫
  const handleInputFirebase = () => {
    const sex = document.querySelector('input[name="color"]:checked').value
    const info = [
      {
        contactEmail: contactEmail.current.value,
        name: contactName.current.value,
        phone: contactPhone.current.value,
        email: contactEmail.current.value,
        text: contactText.current.value,
        sex: sex,
      },
    ]
    inputFirebase(info)
  }
  //重新填寫
  const reNew = () => {
    contactName.current.value = ''
    contactPhone.current.value = ''
    contactEmail.current.value = ''
    contactText.current.value = ''
  }
  return (
    <div className="contact">
      <div className="title">
        <h1>聯絡我們/contact us</h1>
        <img src={Path} alt=""></img>
      </div>
      <div className="contact-content">
        <div className="block-left">
          <span>姓名</span>
          <input type="text" size="10" ref={contactName} />
          <br />
          <span>性別</span>
          <input type="radio" name="color" value="boy" defaultChecked /> 男
          <input type="radio" name="color" value="girl" /> 女<br />
          <span>電話</span>
          <input type="text" size="10" ref={contactPhone} />
          <br />
          <span>Email</span>
          <input type="email" ref={contactEmail} />
          <br />
          <span>問題或建議</span>
          <textarea id="message" name="message" placeholder="請輸入你的建議" ref={contactText}></textarea>
          <br />
          <input type="button" value="重新填寫" onClick={reNew} />
          <input type="button" value="確認送出" onClick={handleInputFirebase} />
        </div>
        <div className="block-right">
          <p>
            官方網站:<a href="./index.html">www.abc.com.tw</a>
          </p>
          <p>
            官方Facebook:<a href="https://www.facebook.com/">https://www.facebook.com/</a>
          </p>
          <p>
            官方Line:<a href="https://line.me/zh-hant/">https://line.me/zh-hant/</a>
          </p>
          <p>
            官方Ig:<a href="https://www.instagram.com/l">https://www.instagram.com/</a>
          </p>
          <p>電話: 0916-369-062</p>
          <p>
            官方信箱:<a href="###">hn15637648@gmail.com</a>
          </p>
          <iframe
            title="123"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9233453123074!2d121.48640677785833!3d25.07058711358341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8dc1e8a1361%3A0xe88941c9eb8f8c50!2zMjQx5paw5YyX5biC5LiJ6YeN5Y2A5b-g5a2d6Lev5LqM5q61Mzjlt7cx6Jmf!5e0!3m2!1szh-TW!2stw!4v1606649395015!5m2!1szh-TW!2stw"
            max-width="450"
            max-height="300"
            frameBorder="0"
            style={{ border: 0 }}
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
export default Contact
