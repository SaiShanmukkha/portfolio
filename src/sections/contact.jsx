export default function Contact() {
  return (
    <div className="portfolio-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h2 className="mb-4 mb-lg-5">Contact Me</h2>
            <form action="#" method="post">
              <div className="form-group mb-4">
                <label htmlFor="name" className="text-white mb-1">Name</label>
                <input
                  type="text"
                  className="form-control bg-transparent text-light"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="email " className="text-white mb-1">Email</label>
                <input
                  type="email"
                  className="form-control bg-transparent text-light"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="message" className="text-white mb-1">Message</label>
                <textarea
                  className="form-control bg-transparent text-light"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button className="btn btn-outline-success" type="submit" value="send">
                Send Now
              </button>
            </form>
          </div>
          {/* <div className="col-lg-5 offset-lg-1">
            <h2 className="mb-4 mb-lg-5">Get In Touch</h2>
            <p className="mb-4 mb-lg-5">
              Let’s talk about your project and how I can help you or if you
              just want to chat about design and art - shoot me a message at{" "}
              <a href="mailto:abcxmple@gmail.com">abcxmple@gmail.com</a>
            </p>
            <ul className="list-unstyled">
              <li className="d-flex mb-4">
                <i className="bi-mailbox2 h4 text-primary mr-3 mt-1"></i>
                <p className="mb-0">s.vanbuuren@uu.nl</p>
              </li>
              <li className="d-flex mb-4">
                <i className="bi-phone h4 text-primary mr-3 mt-1"></i>
                <p className="mb-0">+8801856388817</p>
              </li>
              <li className="d-flex mb-4">
                <i className="bi-arrow-through-heart-fill h4 text-primary mr-3 mt-1"></i>
                <p className="mb-0">
                  Sjoerd Groenmangebouw C1.19, Padualaan 14,3584 CH Utrecht, The
                  Netherlands; TNO Child The Netherlands
                </p>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
