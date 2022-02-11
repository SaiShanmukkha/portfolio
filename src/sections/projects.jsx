import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "../components/projectItem";



export default function Projects() {
  var projectsData = [
    {
      Id : 1,
      Title: "Ecommerce Application",
      Description: "Ecommerce Application is built using JSP, Servlets technology and MySql as Database Backend. It has built-in Admin Dashboard for better Management.",
      ImageURL: "https://docs.google.com/uc?id=1sttd92lOnZL41okqO9pAuma5Hf5etwmV",
      ProjectURL: "https://github.com/SaiShanmukkha/EcomApp"
    },
    {
       Id : 2,
      Title: "Chat App",
      Description: "Chat App is built using Google's  Cross Platform Application development framework known as 'Flutter'. It uses Firebase as backend and Cloud FireStore for storing data.",
      ImageURL: "https://docs.google.com/uc?id=1vfbZCdRuw1NT1j3sRttDQt8PlxTuHbze",
      ProjectURL: "#"
    },
    {
       Id : 3,
      Title: "ProactoDoctor",
      Description: "ProactoDoctor is a appointment scheduling application built using .NET Core 5.0 Framework, Entity Core Framwork and MS Sql Server as backend database. It also uses Rest API.",
      ImageURL: "https://docs.google.com/uc?id=1JvKwwU8HvYK9gLLeq-jKYEnE1sEZOHCX",
      ProjectURL: "https://github.com/SaiShanmukkha/ProactoDoctor"
    },
    {
       Id : 4,
      Title: "Inventory Management",
      Description: "Inventory Management system for Admin which is built using .NET Core 5.0 Framework, MS Sql Server as database. It uses ADO.NET for database connectivity.",
      ImageURL: "https://docs.google.com/uc?id=18fIOQKIH2-2u_-y2LaNC5GGfiQ1FsbvG",
      ProjectURL: "https://github.com/SaiShanmukkha/Inventory-Management"
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
        breakpoint: 1100,
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
             return <ProjectItem key={projectItem.Id} title={projectItem.Title} description={projectItem.Description} projectURL={projectItem.ProjectURL} imageURL={projectItem.ImageURL}/>
           })}
        </Slider>
      </div>
  );
}

