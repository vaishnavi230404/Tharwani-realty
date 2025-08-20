import React, { useState } from "react";
import Navbar from "../src/Components/html/navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'remixicon/fonts/remixicon.css';
import "./home.css";
import TabLayout from "./Components/html/tabLayout";
import EnquiryPopup from "../src/Components/html/popup";

import AboutUsImage from "../src/assets/aboutusimage.webp";
import BHKUnitPlan from "../src/assets/1bhkunitplan.webp";
import _2BHKUnitPlan from "../src/assets/2bhkunitplan.webp";
import Logo from "../src/assets/tharwanirealtylogo.png";
import Banner1 from "../src/assets/banner1.webp";
import Banner2 from "../src/assets/banner2.webp";


function Home({ onBrochureClick }) {
  const [showMore, setShowMore] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  /*const amenitiesList = [
    { name: 'Kids Play Area', img: Kidsplay },
    { name: 'Multipurpose Court', img: Court },
    { name: 'Gym', img: Gym },
    { name: 'Mini Theatre', img: Theatre },
    { name: 'Yoga', img: Yoga },
    { name: 'Jogging Track', img: Jogging },
  ];*/

  const handleClosePopup = () => setIsPopupOpen(false);
  return (
    <>
      <Navbar onBrochureClick={() => setIsPopupOpen(true)} />
      <EnquiryPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
      {/* Swiper Slider */}
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          speed={800}
        >
          <SwiperSlide>
            <div className="slide">
              <img src={Banner1} alt="Banner 1" className="slide-img" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <img src={Banner2} alt="Banner 2" className="slide-img" />

            </div>
          </SwiperSlide>
          <div className="property-card-overlay">
            <div className="property-card">
              <div className="card-badge">Connect Us</div>
              <p className="card-location">Kalyan West, Thane</p>


              <div className="card-details">
                <div>
                  <span className="label">500 Million+</span> <span className="value">SQ.FT. Developed</span>

                </div>
                <div>
                  <span className="label">3000+ </span><span className="value">Happy Families</span>

                </div>
              </div>

              <div className="card-price">
                <p>1 & 2 BHK Homes Start</p>
                <h3>₹ 29.99 Lacs<sup>*</sup> Onwards</h3>
              </div>

              <button className="enquire-btn" onClick={onBrochureClick}>Enquire Now</button>
              <p className="rera">RERA : P51700046171</p>
            </div>
          </div>
        </Swiper>
      </div>

      {/* Project Content */}
      <div className="project-container">
        <div className="project-content">
          <h2>Welcome To Tharwani Realty</h2>
          <div className="underline" />

          <p>
            Over the last couple of decades, Tharwani Realty has prided itself on its heritage of excellence, the spirit of entrepreneurship, and strong values. These values and unprecedented vision have resulted in the birth of its many successful luxurious projects such as Tharwani Rosewood Heights and Tharwani Heritage, to name a few. Commitment to excellence and the drive to the transform lives of its customers is what sets the Realty apart.Going forward, Tharwani Realty will merge the philosophy of innovation, sustainability, and excellence into the real estate industry through its upcoming world-class projects that are a combination of a legacy of excellence and trust with a commitment to cutting-edge design and technology.
          </p>

          {showMore && (
            <p>
              We build value beyond real estate.We shape the future of how you live, breathe, and play. Through exceptional service, hospitality, amenities, and technology, we offer an advanced atmosphere of well-being with a passion for building the local community and making your residential property a safe and prosperous place to live and grow old.
              We aim to be the country's leading real estate developer and the preferred place of residence for home seekers. We consistently strive to develop collaborative partnerships, based on transparency and mutual trust, which build enduring relationships. As we expand, we're committed to these principles, which have served our company and buyers through the years.

            </p>
          )}

          <a
            href="home.jsx"
            className="read-link"
            onClick={(e) => {
              e.preventDefault();
              setShowMore(!showMore);
            }}
          >
            {showMore ? "Read less" : "Read more"}
          </a>

          <button className="brochure-btn" onClick={onBrochureClick}><i className="ri-download-2-line"></i>Request Brochure</button>
        </div>

        <div className="project-image" >
          <img src={AboutUsImage} alt="Tharwani realty" />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-container" id="price">
        <h2 className="pricing-heading">Area & Pricing</h2>
        <div className="underline" />
        <div className="pricing-cards">
          <div className="pricing-item">
            <div className="pricing-card">
              <h3>1 BHK</h3>
              <p className="size">490 Sq. ft</p>
              <p className="price">₹ 29.99 Lacs* Onwards</p>
            </div>
            <button className="costing-button" onClick={onBrochureClick}>Complete Costing Details</button>
          </div>

          <div className="pricing-item">
            <div className="pricing-card">
              <h3>2 BHK</h3>
              <p className="size">690 Sq. ft</p>
              <p className="price">₹ 39.99 Lacs* Onwards</p>
            </div>
            <button className="costing-button" onClick={onBrochureClick}>Complete Costing Details</button>
          </div>
        </div>
      </div>

      <div className="layout-container" id="site-plan">
        <div className="layout-card">
          <h2 className="layout-heading">1 BHK Layout</h2>
          <div className="image-box left-rounded">
            <img src={BHKUnitPlan} alt="1 BHK Plan Layout" className="layout-image" />
            <div className="overlay-text">Request 1 BHK Plan Layout</div>
          </div>
          <button className="layout-btn" onClick={onBrochureClick}>Request 1 BHK  Plan Layout</button>
        </div>

        <div className="layout-card">
          <h2 className="layout-heading"> 2 BHK Plan Layout</h2>
          <div className="image-box right-rounded">
            <img src={_2BHKUnitPlan} alt="2 BHK Plan Layout" className="layout-image" />
            <div className="overlay-text">Request 2 BHK Plan Layout</div>
          </div>
          <button className="layout-btn" onClick={onBrochureClick}>Request 2 BHK Plan Layout</button>
        </div>
      </div>

      <div className="map-wrapper" id="location">
        {/* Custom Business Info Card */}
        <div className="info-card">
          <h2 className="location-heading">Tharwani Realty, Tharwani Solitaire.</h2>
          <div className="underline" />
          <a
            href="https://www.google.com/maps/place/Tharwani+Realty,+Tharwani+Solitaire/@19.0255223,72.8575175,9.12z/data=!4m6!3m5!1s0x3be796a10000006b:0x2a1e635237dec727!8m2!3d19.2477116!4d73.1767857!16s%2Fg%2F11fy_5r0_2?hl=en&entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
        </div>

        {/* Google Map Embed */}
        <iframe
          title="Tharwani Realty Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.937338787888!2d73.1767857!3d19.2477116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796a10000006b%3A0x2a1e635237dec727!2sTharwani%20Realty%2C%20Tharwani%20Solitaire!5e0!3m2!1sen!2sin!4v1693481612345!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 10, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <section className="legacy-section">
        <div className="legacy-overlay">
          <div className="legacy-stats">
            <div className="stat">
              <h2>5+</h2>
              <p>Million sq.ft<br />Area Developed</p>
            </div>
            <div className="stat">
              <h2>35+</h2>
              <p>Projects</p>
            </div>
            <div className="stat">
              <h2>3000+</h2>
              <p>Happy Families</p>
            </div>
            <div className="stat">
              <h2>30</h2>
              <p>Years Of<br />Legacy</p>
            </div>
          </div>

          <p className="legacy-text">
            With over <strong>30 years of legacy</strong>, we have developed more than
            <strong> 5 million square feet</strong> across <strong>35+ projects</strong>,
            bringing happiness to over <strong>3000 families</strong>.
          </p>
        </div>
      </section>


     {/*<TabLayout onBrochureClick={onBrochureClick} />*/}

      <div className="footer-container">
        <img src={Logo} alt="Tharwani Realty" className="footer-logo" />
        {/*<img alt="qr-code" className="qr-code" />
       

        <p className="maharera-text">Project MahaRERA No. – P51700046171</p>
        <p className="maharera-text">Agent MahaRERA No. – A031332401468</p>
        <p className="maharera-text">(<a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noreferrer">
          https://maharera.maharashtra.gov.in/</a>)
        </p>*/}
        <p className="disclaimer">
          Disclaimer : The content is for information purposes only and does not constitute an offer to avail of any service.
          The prices mentioned are subject to change without notice and the properties mentioned are subject to availability.
          Images are for representation purposes only. We are the authorized marketing partner, Project RERA No:
          P51700046171. We may send updates to the mobile number/email id registered with us.
        </p>

        <div className="footer-bottom">
          <div>
            <a href="home.jsx">Privacy Policy</a> | <a href="home.jsx">Terms & Conditions</a>
          </div>
          <p>All Rights Reserved. © 2025 S-SenseRealty</p>
        </div>
      </div>

      {/* Mobile Bottom Buttons */}
      <div className="mobile-action-bar">
        <a href="tel:+919890834878" className="action-button">
          <i className="ri-phone-line"></i> Call
        </a>
        <button className="action-button" onClick={() => setIsPopupOpen(true)}>
          <i className="ri-edit-line"></i> Enquire
        </button>
        <a href="https://wa.me/919890834878" className="action-button" target="_blank" rel="noopener noreferrer">
          <i className="ri-whatsapp-line"></i> WhatsApp
        </a>
      </div>
    </>
  );
}

export default Home;
