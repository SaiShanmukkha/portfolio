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
                  required
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
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="message" className="text-white mb-1">Message</label>
                <textarea
                  className="form-control bg-transparent text-light"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button className="btn btn-outline-success" type="submit" value="send">
                Send Now
              </button>
            </form>
          </div>
          {/* <div className="col-lg-5 offset-lg-1">
           
          </div> */}
        </div>
      </div>
    </div>
  );
}
