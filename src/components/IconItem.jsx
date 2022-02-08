export default function IconItem({logoName, logoLocation}){
    return (

        <div className="skill-item d-inline-flex  m-1 p-5">
                <div className="skill-logo">
                    <img max-width="80px" height="80px" src={logoLocation}/>                   
                </div>
                 <div className="pt-2 text-center text-white">{logoName}</div>
        </div>

    );
}