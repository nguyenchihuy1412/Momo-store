import React from "react";
import "./contact.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact">
        <h1>Have Some Question?</h1>
        <hr />
        <div className="form">
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png?w=360"
            alt=""
          />
          <div className="info">
            <div className="group">
              <label htmlFor="name">Fullname</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your fullname..."
              />
            </div>
            <div className="group">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="Enter your email..." />
            </div>
            <div className="group">
              <label htmlFor="question">Question</label>
              <textarea
                type="text"
                id="question"
                placeholder="Enter your question..."
              />
            </div>
          </div>
        </div>
        <button className="btn sendMessage">Send Message</button>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
