export default function Projects() {
  var projects = [
    {
      title: "project 1",
      description: "Fake description",
      imageURL: "#",
    },
    {
      title: "project 2",
      description: "Fake description",
      imageURL: "#",
    },
    {
      title: "project 3",
      description: "Fake description",
      imageURL: "#",
    },
    {
      title: "project 4",
      description: "Fake description",
      imageURL: "#",
    },
  ];

  return (
    <div className="portfolio-section">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <h2>Projects</h2>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <article className="card bg-dark rounded-0 border-0">
              <img
                src="https://demo.gethugothemes.com/gofolium/images/projects/project1.jpg"
                alt=""
                className="card-img-top mb-4 rounded-0"
              />
              <div className="card-body">
                <h4 className="mb-3">
                  <a href="https://demo.gethugothemes.com/gofolium/projects/project-1/">
                    Reasons Why Employees Quit | Human Resources Analytics
                  </a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </article>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <article className="card bg-dark rounded-0 border-0">
              <img
                src="https://demo.gethugothemes.com/gofolium/images/projects/project2.jpg"
                alt=""
                className="card-img-top mb-4 rounded-0"
              />
              <div className="card-body">
                <h4 className="mb-3">
                  <a href="https://demo.gethugothemes.com/gofolium/projects/project-2/">
                    Reasons Why Employees Quit | Human Resources Analytics
                  </a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </article>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            <article className="card bg-dark rounded-0 border-0">
              <img
                src="https://demo.gethugothemes.com/gofolium/images/projects/project3.jpg"
                alt=""
                className="card-img-top mb-4 rounded-0"
              />
              <div className="card-body">
                <h4 className="mb-3">
                  <a href="https://demo.gethugothemes.com/gofolium/projects/project-3/">
                    Reasons Why Employees Quit | Human Resources Analytics
                  </a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </article>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
          </div>
          <div className="col-12 text-center mt-5">
            <a
              href="https://demo.gethugothemes.com/gofolium/projects"
              className="btn btn-primary btn-style"
            >
              All Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
