import react from "react";
import { ReactDOM } from "react";

export default function Footer() {
  return (
    <footer>
      <div className="conatiner">
        <div className="footer-flex">
          <ul>
          <h4 className="footer-titles">عن الشركة</h4>
          <p style={{maxWidth: "400px"}}>
            شركة ICOM تقدم خدمات احترافية في مختلف قطاعات السوق الرقمي، لنرتقي
            بمستوى الخدمات الإلكترونية المقدمة إلى قطاع الأعمال عبر باقات من
            الخدمات المتنوعة، محاولين تحقيق أفضل معدل وصول لمنتجاتهم وخدماتهم
            عبر توسيع قاعدة مستخدميهم، وكذلك رفع معدلات أرباحهم، ليكونوْا روادًا
            في مجالهم
          </p>
          </ul>
          <ul className="contact-ul">
            <h4 className="footer-titles">تواصل معنا</h4>
            <div className="footer-icons" dir="ltr">
            <div className="info-content info-content-footer" dir="ltr">
            
            <a href="https://wa.me/+963991070885" >+963991070885</a>
            <i className="fa-brands fa-whatsapp"></i>
              <br />
             
              <a href="https://www.facebook.com/IcomDigitalAgency/" dir="ltr">
              
                ICOM
              </a>
              <i className="fa-brands fa-facebook"></i>
              <br />
              
              <a href="https://www.instagram.com/icom.digital/">icom.digital</a>
              <i className="fa-brands fa-instagram"></i>{" "}
              <br/>
              
              <a href="mailto:info@icom-digital.com">info@icom-digital.com</a>
              <i className="fa-solid fa-envelope"></i>
            </div>
            </div>
          </ul>
          <ul>
          <h4 className="footer-titles">عن اعمالنا</h4>
          <li>
              <a href="https://icom-digital.com/web">تصميم وبرمجة مواقع الويب</a>
            </li>
            <li>
              <a href="https://icom-digital.com/">تصميم وبرمجة تطبيقات الهاتف المحمول</a>
            </li>
            <li>
              <a href="https://icom-digital.com/#service">التسويق عبر منصات التواصل الاجتماعي</a>
            </li>
            <li>
              <a href="https://icom-digital.com/#service">تصميم العلامة التجارية والهوية البصرية</a>
            </li>
            <li>
              <a href="https://icom-digital.com/#service">تصميم داخلي</a>
            </li>
          </ul>

          <ul style={{display:"block"}}>
            <h4 className="footer-titles" style={{paddingBottom:"20px"}}>روابط</h4>
            <div>
            <li>
              <a href="https://icom-digital.com/">الرئيسية</a>
            </li>
            <li>
              <a href="https://icom-digital.com/">عن الشركة</a>
            </li>
            <li>
              <a href="https://icom-digital.com/#service">خدماتنا</a>
            </li>
            </div>
          </ul>
          
          
        </div>
        <div className="rights">
        www.icom-digital.com © 2022-جميع الحقوق محفوظة
        </div>
        
      </div>
      
    </footer>
  );
}
