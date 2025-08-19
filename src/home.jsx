import React, { useState } from "react";
import Navbar from "../src/Components/html/navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'remixicon/fonts/remixicon.css';
import Logo from "../src/assets/mohangrrenslogo.png";
import Banner1 from "../src/assets/bannner-1.webp";
import Banner2 from "../src/assets/banner-2.webp";
import Layout1 from "../src/assets/smp.webp";
import Layout2 from "../src/assets/unitplan.webp";
import QrCode from "../src/assets/P51700046171.jpg";
import "./home.css";
import TabLayout from "./Components/html/tabLayout";
import EnquiryPopup from "../src/Components/html/popup"; 
import Kidsplay from "../src/assets/kids-play.jpg";
import Court from "../src/assets/court.jpg";
import Gym from "../src/assets/gym.jpg";
import Theatre from "../src/assets/theatre.jpg";
import Yoga from "../src/assets/yoga.jpg";
import Jogging from "../src/assets/jogging.jpg";

function Home({ onBrochureClick }) {
  const [showMore, setShowMore] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const amenitiesList = [
    { name: 'Kids Play Area', img: Kidsplay },
    { name: 'Multipurpose Court', img: Court },
    { name: 'Gym', img: Gym },
    { name: 'Mini Theatre', img: Theatre },
    { name: 'Yoga', img: Yoga },
    { name: 'Jogging Track', img: Jogging },
  ];

  const handleClosePopup = () => setIsPopupOpen(false);
  return (
    <>
      <Navbar onBrochureClick={() => setIsPopupOpen(true)}  />
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
            <div className="card-badge">New Launch</div>
            <h2 className="card-title">MOHAN PRECIOUS GREENS</h2>
            <p className="card-location">Ambernath East, Thane</p>
            <p className="card-by">By Mohan Group</p>

            <div className="card-details">
              <div>
                <span className="label">Land Parcel</span> <span className="value">10 Acres</span>
                
              </div>
              <div>
                <span className="label">Floors </span><span className="value">18 Storey</span>
                
              </div>
            </div>

            <div className="card-price">
              <p>1 & 2 BHK Homes Start</p>
              <h3>₹ 36.50 Lacs<sup>*</sup> Onwards</h3>
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
          <h2>Mohan Precious Greens</h2>
          <div className="underline" />

          <p>
            Mohan Precious Greens is a residential project by the Mohan Group,
            offering thoughtfully designed 1 & 2 BHK Homes with a focus on
            modern living and sustainability. The project features over 30
            lifestyle amenities, inpmncluding a lap pool, clubhouse, mini-theatre,
            gym, spa, squash court, skating rink, cycling track, aroma gardens,
            and dedicated zones for seniors and children. Its architecture
            promotes eco-conscious living with green decks, landscaped gardens,
            and sustainable infrastructure, creating a healthy and vibrant
            community environment.
          </p>

          {showMore && (
            <p>
              Strategically located just minutes away from Ambernath railway
              station, Mohan Precious Greens offers excellent connectivity to
              Mumbai, Thane, and surrounding areas. The project enjoys close
              proximity to reputed schools, hospitals, supermarkets, and daily
              conveniences, making it a practical choice for families and
              working professionals alike. With a perfect blend of comfort,
              connectivity, and lifestyle, it stands as an ideal residential
              option in the fast-developing Ambernath East locality.
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
          <img src={Banner2} alt="Mohan Precious Greens" />
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
              <p className="size">500 Sq. ft</p>
              <p className="price">₹ 36.50 Lacs* Onwards</p>
            </div>
            <button className="costing-button" onClick={onBrochureClick}>Complete Costing Details</button>
          </div>

          <div className="pricing-item">
            <div className="pricing-card">
              <h3>2 BHK</h3>
              <p className="size">610–710 Sq. ft</p>
              <p className="price">₹ 52.50 Lacs* Onwards</p>
            </div>
            <button className="costing-button" onClick={onBrochureClick}>Complete Costing Details</button>
          </div>
        </div>
      </div>

      <div className="layout-container" id="site-plan">
        <div className="layout-card">
          <h2 className="layout-heading">Master Plan Layout</h2>
          <div className="image-box left-rounded">
            <img src={Layout1} alt="Master Plan" className="layout-image" />
            <div className="overlay-text">Request Master Plan Layout</div>
          </div>
          <button className="layout-btn" onClick={onBrochureClick}>Request Master Plan Layout</button>
        </div>

        <div className="layout-card">
          <h2 className="layout-heading">Unit Plan Layout</h2>
          <div className="image-box right-rounded">
            <img src={Layout2} alt="Unit Plan" className="layout-image" />
            <div className="overlay-text">Request Unit Plan Layout</div>
          </div>
          <button className="layout-btn" onClick={onBrochureClick}>Request Unit Plan Layout</button>
        </div>
      </div>

      <section className="amenities-section">
      <h2 className="amenities-heading">Amenities</h2>
      <div className="underline" />
        <div className="amenities-grid">
          {amenitiesList.map((amenity, index) => (
            <div className="amenity-card" key={index}>
              <img src={amenity.img} alt={amenity.name} />
              <p className="amenity-name">{amenity.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="location-section" id="location">
        <h2 className="location-heading">Location</h2>
        <div className="underline" />

        <div className="map-container">
          <iframe
            title="Mohan Precious Greens Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15071.725817664952!2d73.200976!3d19.198196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be793a60854a98f%3A0x2d9a66482e3eba4d!2sMohan%20Precious%20Greens%20(MPG)!5e0!3m2!1sen!2sin!4v1754031832313!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <TabLayout onBrochureClick={onBrochureClick}/>

      <div className="footer-container">
        <img src={Logo} alt="Mohan Precious Greens" className="footer-logo" />
        <img src={QrCode} alt="qr-code" className="qr-code" />

        <p className="maharera-text">Project MahaRERA No. – P51700046171</p>
        <p className="maharera-text">Agent MahaRERA No. – A031332401468</p>
        <p className="maharera-text">(<a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noreferrer">
          https://maharera.maharashtra.gov.in/</a>)
        </p>
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
