import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "../components/projectItem";



export default function Projects() {
  var projectsData = [
    {
      Id : 1,
      Title: "project 1",
      Description: "Fake description",
      ImageURL: "#",
      ProjectURL: "#"
    },
    {
       Id : 2,
      Title: "project 2",
      Description: "Fake description",
      ImageURL: "#",
      ProjectURL: "#"
    },
    {
       Id : 3,
      Title: "project 3",
      Description: "Fake description",
      ImageURL: "#",
      ProjectURL: "#"
    },
    {
       Id : 4,
      Title: "project 4",
      Description: "Fake description",
      ImageURL: "#",
      ProjectURL: "#"
    },
    {
       Id : 5,
      Title: "project 5",
      Description: "Fake description",
      ImageURL: "#",
      ProjectURL: "#"
    },
    {
       Id : 6,
      Title: "project 6",
      Description: "Fake description",
      ImageURL: "#",
      ProjectURL: "#"
    },
   
  ];

    let settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      cssEase: "linear",
      responsive: [
        {
        breakpoint: 900,
        settings: {
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
        {
        breakpoint: 600,
        settings: {
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      ]
    };

    return (
      <div className="px-3">
        <h2> Projects</h2>
        <Slider {...settings}>
           {projectsData.map((projectItem)=>{
             return <ProjectItem key={projectItem.Id} title={projectItem.Title} description={projectItem.Description}/>
           })}
        </Slider>
      </div>
  );
}

