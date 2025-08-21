import React, { useState } from "react";
import "../../Components/css/popup.css";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import 'remixicon/fonts/remixicon.css';

const CallEnquiryPopup = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone.trim() || !consent) {
      alert("Please enter your number and accept terms.");
      return;
    }

    try {
      setLoading(true);

      // send enquiry to backend (email or DB)
      const response = await fetch("https://Tharwani-ariana.s-senserealty.in/enquiry.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ phone })
      });

      setLoading(false);

      if (response.ok) {
        alert("Thank you! We will call you now.");

        // Trigger call
        window.location.href = `tel:${phone}`;

        // Reset and close
        setPhone("");
        setConsent(false);
        onClose();
      } else {
        alert("Failed to send enquiry.");
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Something went wrong.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className="popup-heading">CALL NOW</h2>
        <div className="underline" />

        <form onSubmit={handleSubmit} className="popup-body">
          <div className="popup-right">
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

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Please wait..." : "Call Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallEnquiryPopup;
