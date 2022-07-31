import "../App.css";
import React from "react";
import ParticleBackground from "../particle-background";
import Navigation from "../components/navigation";
import QLinks from "../sections/qlinks";
import LearningItem from "../components/learning-Item";
import { useEffect, useState } from "react";
import Spinner from "react-spinkit";


const LearningsPage = () => {
  document.title = "Sai Shanmukkha - Learnings";


  const [isLoadingData, setIsLoadingData] = useState(true);
  const [learningsData, setLearningsData] = useState(null);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const getLearningsData = async ()=>{
    try{
      const dataXJSTYS = sessionStorage.getItem("XJSTYS")
      if (dataXJSTYS !== null) {
        const response = dataXJSTYS;
        var responseData = JSON.parse(response);
      }else{
              const response = await fetch(
                "https://script.google.com/macros/s/AKfycbz7LLHssYS2ksY93N9yp2iB-mCyXa3VkM9WlesE71R8_so_-zMuuqFMrRNFl4m1ZeoD/exec"
              );
              var responseData = await response.json();
              let bufferXJSTYS = JSON.stringify(responseData);
              sessionStorage.setItem("XJSTYS", bufferXJSTYS);              
      }

      if(responseData["result"] == "success"){
        setLearningsData(responseData["data"]);
        setErrorOccurred(false);
      }else{
        setErrorOccurred(false);
        setLearningsData(null);
      }
    }catch(e){
      setLearningsData(null);
      setErrorOccurred(true);
    }finally{
      setIsLoadingData(false);
    }
  }

  useEffect(()=>{
    getLearningsData();
  }, []);


  return (
    <div>
      <ParticleBackground color="#2EF508"></ParticleBackground>
      <div className="container">
        <Navigation></Navigation>
        <h2> Learnings</h2>
        <div className="Learning-Items">
          {learningsData !== null &&
            learningsData.map((item) => {
              return (
                <LearningItem
                  key={item.Title}
                  title={item.Title}
                  description={item.Description}
                  source={item.CourseURL}
                  certLink={item.CertificateURL}
                  platform={item.Platform}
                  imagepath={`/assets/images/${item.Platform.toLowerCase()}.png`}
                />
              );
            })}
        </div>
        {isLoadingData && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 500,
            }}
          >
            <Spinner
              name="cube-grid"
              color="yellow"
              style={{
                width: 100,
                height: 100,
                backgroundColor: "black",
              }}
            />
          </div>
        )}
        {learningsData === null && !isLoadingData && (
          <div style={{ height: 100, color: "yellow", textAlign: "center" }}>
            No Data Available Currently. Please try after sometime.
          </div>
        )}
        {errorOccurred && (
          <div style={{ height: 100, color: "red", textAlign: "center" }}>
            Error Occurred. Please try after sometime.
          </div>
        )}
        <QLinks />
      </div>
    </div>
  );
};

export default LearningsPage;
