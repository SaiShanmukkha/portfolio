export default function Navigation () {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand link-light fs-1" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 fs-5">
                        <li className="nav-item">
                            <a className="nav-link active link-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-light" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-light" href="#">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-light" href="#">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-light" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link-light fs-5" href="#">Projects</a>
                        </li>
                        <button className="btn btn-success mx-2">Contact</button>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}










