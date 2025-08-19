import React, { useState } from "react";
import "../../Components/css/popup.css";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import 'remixicon/fonts/remixicon.css';

const EnquiryPopup = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !consent) {
      alert("Please fill all fields and accept terms.");
      return;
    }

    try {
      const response = await fetch("https://yourdomain.com/enquiry.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, phone })
      });

      if (response.ok) {
        alert("Thank you! Your enquiry has been submitted.");

        // Brochure download
        const link = document.createElement("a");
        link.href = "/mohan-precious-greens.pdf";
        link.download = "mohan-precious-greens.pdf";
        link.click();

        // Reset and close
        setName("");
        setPhone("");
        setConsent(false);
        onClose();
      } else {
        alert("Failed to send enquiry.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className="popup-heading">ENQUIRE NOW</h2>
        <div className="underline" />

        <form onSubmit={handleSubmit} className="popup-body">
          <div className="popup-left">
            <div className="we-promise-box">
              <div className="we-promise-header">WE PROMISE</div>
              <ul className="we-promise-list">
                <li><i className="ri-headphone-line"></i><strong>Instant<br />Call Back</strong></li>
                <li><i className="ri-taxi-line"></i><strong>Free<br />Site Visit</strong></li>
                <li><i className="ri-currency-line"></i><strong>Best<br />Prices</strong></li>
              </ul>
            </div>
          </div>

          <div className="popup-right">
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
              required
            />

            <PhoneInput
              country={"in"}
              value={phone}
               onChange={setPhone}
              inputClass="custom-phone-input"
              inputProps={{
                required: true
              }}
            />

            <div className="checkbox-area">
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <label htmlFor="consent">
                I agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms & Conditions</a>.
                I Authorize Blox and its representatives to Call, SMS, Email or WhatsApp Me About Its Products and Offers. This Consent Overrides Any Registration For DNC/NDNC.
              </label>
            </div>
            

            <button type="submit" className="submit-btn">Submit</button>            
          </div>
        </form>
        <div className="availability-box">
          <div className="availability-header">GET INFORMATION ON AVAILABILITIES</div>
          <div className="availability-options">
            <div className="option"><i className="ri-shield-check-line"></i> Available Units</div>
            <div className="option"><i className="ri-shield-check-line"></i> Payment Plan</div>
            <div className="option"><i className="ri-shield-check-line"></i> Floor Plans</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPopup;
