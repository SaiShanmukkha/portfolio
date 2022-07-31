import React, { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorOnSubmit, setErrorOnSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const onSubmitForm = async (e)=>{
    setIsProcessing(true);
    setErrorOnSubmit(false);
    e.preventDefault();
    const currentDT = new Date().toLocaleString();
    const ContactFormData = {
      name: name,
      email: email,
      message: message,
      date: currentDT,
    };
    const url =
      "https://script.google.com/macros/s/AKfycbwAYgra53vZK0iCyJEor1SSxT_VlUPFo30pV_VoQcrUm-lFKexzfAxyvTjHBfh0KjFZng/exec";
    
    try{

      let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(ContactFormData),
    });

    const data = await response.json();
    console.log(data);
    if (data.result === "success") {
      setIsProcessing(false);
      setIsSubmitted(true);
      setErrorOnSubmit(false);
    } else {
      setIsProcessing(false);
      setErrorOnSubmit(true);
      setIsSubmitted(false);
    }
    }catch(e){
      setIsProcessing(false);
      setIsSubmitted(false);
      setErrorOnSubmit(true);
    }
  }

  return (
    <div className="portfolio-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h2 className="mb-4 mb-lg-5">Contact Me</h2>
            <form className="form-group" onSubmit={onSubmitForm}>
              <div className="form-group mb-4">
                <label htmlFor="name" className="text-white mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control bg-transparent text-light"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name Here"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="email " className="text-white mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control bg-transparent text-light"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email Here"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="message" className="text-white mb-1">
                  Message
                </label>
                <textarea
                  className="form-control bg-transparent text-light"
                  id="message"
                  name="message"
                  maxLength={500}
                  placeholder="Type Your Message Here"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required
                ></textarea>
              </div>
              <div className="form-group mb-4">
                {isProcessing && <div class="customLoader"></div>}
                {(!isProcessing && !isSubmitted) && (
                  <button
                    className="btn btn-outline-success border-3 font-weight-bold"
                    type="submit"
                  >
                    Send Now
                  </button>
                )}
              </div>
            </form>
            {(isSubmitted && !isProcessing) && (
              <h6>Thanks for Contacting Me. Will get back ASAP.</h6>
            )}
            {errorOnSubmit && (
              <h6 style={{ color: "red" }}>Error Occured. Please Try Again.</h6>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
