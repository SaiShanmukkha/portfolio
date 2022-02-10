import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "../components/projectItem";


export default function Projects() {
  var projectsData = [
    {
      Title: "project 1",
      Description: "Fake description",
      ImageURL: "#",
      ProjectURL: "#"
    },
    {
      Title: "project 2",
      Description: "Fake description",
      ImageURL: "#",
      ProjectURL: "#"
    },
    {
      Title: "project 3",
      Description: "Fake description",
      ImageURL: "#",
      ProjectURL: "#"
    },
    {
      Title: "project 4",
      Description: "Fake description",
      ImageURL: "#",
      ProjectURL: "#"
    },
    {
      Title: "project 5",
      Description: "Fake description",
      ImageURL: "#",
      ProjectURL: "#"
    },
    {
      Title: "project 6",
      Description: "Fake description",
      ImageURL: "#",
      ProjectURL: "#"
    },
   
  ];

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed:4000,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2> Projects</h2>
        <Slider {...settings}>
           {projectsData.map((projectItem)=>{
             return <ProjectItem title={projectItem.Title} description={projectItem.Description}/>
           })}
        </Slider>
      </div>
  );
}

