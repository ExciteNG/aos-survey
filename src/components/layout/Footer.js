import React, { useState } from "react";
import useAxios from "./../../utility/axios-token-manager/init";
import logo from './../../components/asset/img/Excite WLL.png'


// 
export default function Footer() {
  const [email,setEmail] = useState("")

  const handleSubmit =async ()=>{

    const response = await useAxios.post('/support/newsletter',{email});
     console.log(response.data)

  }
  return (
    <>
      <div className="new-footer ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-about mb-4">
              <span className="mb-4">
                <img
                  style={{ width: "100px" }}
                  src={logo}
                  alt="brand"
                  className="mb-4"
                />
              </span>
              <p>
                Excite Enterprise aims at providing a set of tools to develop
                and deepen markets for micro/small and medium businesses,
                providing entrepreneurs across the sectors opportunities to
                reach consumers- boosting brand names, sales, competitiveness
                and improving services
              </p>
              <span className="icon-flex">
                <a href="https://www.facebook.com/Excite-Enterprise-109200980956538"><i className="fa fa-facebook icon-padding" /></a>
                <a href="https://www.twitter.com/excitebusiness"><i className="fa fa-twitter icon-padding" /></a>
                <a href="https://www.instagram.com/exciteenterprise"><i className="fa fa-instagram icon-padding" /></a>
                <a href="https://www.linkedin.com/in/excite-africa-4632a71b9/"><i className="fa fa-linkedin icon-padding" /></a>
                <a href="https://wa.me/2349138650923">
                  <i className="fa fa-whatsapp icon-padding" />
                </a>
              </span>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 new-footer-links">
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul>
              <li>
                  <a href="https://exciteenterprise.com/#home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://exciteenterprise.com/#home">
                    Services
                  </a>
                </li>
                <li>
                  <a href="https://exciteenterprise.com/privacy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://exciteenterprise.com/terms_conditions">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="https://exciteenterprise.com">
                    Funding Services
                  </a>
                </li>
                <li>
                    <a href="https://exciteenterprise.com">Business Promotions</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mailing">
              <h4 className="text-white mb-4">News Letter</h4>
              <p>Subscribe to our mailing list to get updates from Us</p>
              <div className="mail-action-area">
                <div className="mailing-input-wrapper">
                  <i className="fa fa-envelope"></i>
                  <input type="text" placeholder="Enter your email" 
                   name="email" value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   />
                </div>
                <button className="mail-sub-btn" onClick={()=>handleSubmit()}>Subscribe</button>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 footer-contact">
              <h4 className="text-white mb-4">Contact Us</h4>
              <ul>
                <li>
                  <i className="fa fa-building"></i>
                  <p>
                    3, Dapo Bode Thomas street, <br></br> Off Thurborn Avenue, <br></br>Yaba, Lagos.
                  </p>
                </li>
                <li>
                  <a href="tel:+2349038650923">
                    <i className="fa fa-phone"></i>
                    <p>+2349138650923</p>
                  </a>
                </li>
                <li>
                  <a href="mailto:info.exciteafrica.com">
                    <i className="fa fa-at"></i>
                    <p>info@exciteafrica.com</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-border-stuff mt-4">
            <p>Copyright © 2021 • All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
