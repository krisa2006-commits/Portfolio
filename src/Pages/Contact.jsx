import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaUser,
} from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-box">
        <div className="left">
          <span className="contact-tag">CONTACT ME</span>
          <h1>
            Have a
            <br />
            Project?
          </h1>

          <h2>Let's Talk!</h2>
        </div>

        <div className="right">
          <form>
            <div className="input-row">
              <div className="input-box">
                <FaUser className="input-icon" />
                <input type="text" placeholder="Name" />
              </div>

              <div className="input-box">
                <MdEmail className="input-icon" />
                <input type="email" placeholder="Email" />
              </div>
            </div>

            <div className="input-box subject">
              <MdSubject className="input-icon" />
              <input type="text" placeholder="Subject" />
            </div>

            <div className="input-box textarea">
              <BsPencilSquare className="input-icon" />
              <textarea rows="8" placeholder="Message"></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;