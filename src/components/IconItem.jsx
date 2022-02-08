export default function IconItem({logoName, logoLocation}){
    return (

        <div className="skill-item d-inline-flex  m-1 p-5">
                <div className="skill-logo">
                    <img width="60px" height="60px" src="./assets/icons/python.svg"/>
                    <span className="custom-logo-Name">{logoName}</span>
                </div>
        </div>

    );
}