import EducationItem from "../components/educationItem";

export default function Education () {
    let educationData = [
        {
            "Id":1,
            "Degree": "Secondary School Education",
            "period": "May 2015",
            "Major": "General Science",
            "place": "Sasi English Medium School."
        },
        {
             "Id":2,
            "Degree": "Associate Degree (Intermediate)",
            "period": "july 2015 - March 2017",
            "major": "Mathematics, Physics and Chemistry",
            "place": "Sasi Junior College."
        },
        {
             "Id":3,
            "Degree": "Bachelor of Technology - ECE",
            "Major" : "Electronics and Communication Engineering",
            "period": "July 2017- May 2021",
            "place": "National Institute of Technology, Patna."
        },
    ];
    return (
        <div className="portfolio-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2>Education</h2>
                    </div>
                    <div className="col-lg-8">
                        <div className="row justify-content-around">
                           {
                               educationData.map((item)=>{
                                   return  <EducationItem key={item.Id}  degree={item.Degree} period={item.period} institute={item.place}/>
                               })
                           }
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}