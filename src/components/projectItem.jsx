export default function ProjectItem(prop){
    return (
        <div>
            <article className="card bg-dark rounded-0 border-0 m-3">
              <img
                src="https://demo.gethugothemes.com/gofolium/images/projects/project1.jpg"
                alt=""
                className="card-img-top mb-4 rounded-0"
              />
              <div className="card-body">
                <h4 className="mb-3">
                  <a href="https://demo.gethugothemes.com/gofolium/projects/project-1/">
                   {prop.title}
                  </a>
                </h4>
                <p>
                  {prop.description}
                </p>
              </div>
            </article>
        </div>
    );
}