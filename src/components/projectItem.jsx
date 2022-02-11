
export default function ProjectItem(prop){

    return (
        <div>
            <article className="card bg-dark rounded-0 border-0 m-3 p-1">
              <img
                src={prop.imageURL}
                alt="project Image"
                className="card-img-top mb-4 rounded-0"
                width={300}
                height={300}
              />
              <div className="card-body">
                <h5 className="mb-3">
                  <a href={prop.projectURL}>
                   {prop.title}
                  </a>
                </h5>
                <p>
                  {prop.description}
                </p>
              </div>
            </article>
        </div>
    );
}