import React from "react";
import { ReactDOM } from "react";
import { useNavigate } from "react-router-dom";

import Popup from 'reactjs-popup';


export default function Contact() {

  

  
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    service: "",
    phone: ""
  });
  let flag = true

  if(isNaN(formData.phone)){
    flag = false
    document.querySelector('.enter-number').innerHTML = "رجاء ادخل رقم هاتف"

  }else if(!isNaN(formData.phone) && formData.phone !== ''){
    flag = true
    document.querySelector('.enter-number').innerHTML = ''
    
  }
 console.log(flag)
  
 let handleSubmit = async (e) => {
    
   e.preventDefault();
   if(flag === true){
   try {
   
     let res = await fetch("https://icom-agency.com/api/add-message", {
       method: 'POST',
       data:{
         name: formData.name,
         email: formData.email,
         phone: formData.phone,
         message: formData.message,
         service: formData.service
        }
     });
     if (res.status === 200) {
       setFormData((prevFormData) => {
         return {
           ...prevFormData
         }
         
       });
       document.querySelector('.clicked-button').click()
       setTimeout(()=>window.location.replace('https://icom-digital.net/'),3000)
     } else {
       console.log("Some error occured");
     }
   } catch (err) {
     console.log(err);
   }

 }else{
  console.log("flag is false")
  
       
  
 }

}
  

  function handleChange(event) {
    
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

     
      
     
    
  
 
 
  
  return (
    <div className="contact" id="contact-us" name="contact-us">
      <div className="pop-up-content">
      <Popup
    trigger={<button className="button clicked-button"> Open Modal </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> تم ارسال رسالتك بنجاح </div>
        <div className="content">
          {' '}
          <div class="success-checkmark">
  <div class="check-icon">
    <span class="icon-line line-tip"></span>
    <span class="icon-line line-long"></span>
    <div class="icon-circle"></div>
    <div class="icon-fix"></div>
  </div>
</div>

          <br />
        
        </div>
        <div className="actions">
          
          
        </div>
      </div>
    )}
  </Popup>
  </div>
      
      <h1>اتصل بنا</h1>
      <section>
        <div className="rectangle-and-form">
          <div className="red-rectangle">
            <h1>كن على تواصل معنا</h1>
            <p>
              لمناقشة مشروعك بشكل أفضل قم بتعبئة البيانات المطلوبة. سنقوم بالرد
              عليك في أقرب وقت ممكن!
            </p>
            <div className="info-content" dir="ltr">
              <i className="fa-solid fa-location-dot"></i>
              <span> Syria</span>
              <br />
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+963991070885" dir="ltr">
                +963991070885
              </a>
              <br />
              <i className="fa-solid fa-envelope"></i>{" "}
              <a href="mailto:info@icom-digital.com">info@icom-digital.com</a>
            </div>
            <div className="bottom-icons" dir="ltr">
              <a href="https://www.instagram.com/icom.digital/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/IcomDigitalAgency/">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://wa.me/+963991070885">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <div className="squares">
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
            </div>
            <div className="squares2">
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
              <div className="square-line">
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
                <span className="square"></span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="labels">
              الاسم الكريم
            </label>
            <input
              type="text"
              placeholder="ادخل اسمك الكامل"
              onChange={handleChange}
              name="name"
              id="name"
              value={formData.name}
              required
            />
            <label htmlFor="email" className="labels">
              البريد الالكتروني
            </label>

            <input
              type="email"
              placeholder="ادخل بريدك الالكتروني"
              onChange={handleChange}
              name="email"
              id="email"
              value={formData.email}
            />
            <label htmlFor="select" className="labels">
              ادخل الخدمة المطلوبة
            </label>

            <select
              id="select"
              value={formData.service}
              onChange={handleChange}
              name="service"
              required
            >
              <option value="web">تصميم وبرمجة مواقع الويب</option>
              <option value="mobile">
                تصميم وبرمجة تطبيقات الهاتف المحمول
              </option>
              <option value="social">
                التسويق عبر منصات التواصل الاجتماعي
              </option>
              <option value="iden">
                تصميم العلامة التجارية والهوية البصرية
              </option>
              <option value="seo">تهيئة محركات البحث</option>
              <option value="int">تصميم داخلي</option>
              <option value="out">الدعم الفني</option>
            </select>
            <label htmlFor="phone" className="labels">
              رقم الجوال
            </label>

            <input
              type="tel"
              placeholder="ادخل رقم الجوال"
              onChange={handleChange}
              name="phone"
              id="phone"
              value={formData.phone}
              required
            />
            <span className="enter-number">  </span>
            <label htmlFor="comments" className="labels">
              الرسالة
            </label>
            <textarea
              value={formData.message}
              placeholder="ادخل نبذة عن مشروعك"
              onChange={handleChange}
              id="message"
              name="comments"
            />
            <button type="submit">ارسال</button>
          </form>
        </div>
        <img
          src={require("./assets/landing-image.png")}
          alt="contact"
          className="landing-image"
          
        />
      </section>
    </div>
  );
  
  



}
