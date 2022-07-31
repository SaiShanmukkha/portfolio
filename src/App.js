import './App.css';
import Profile from "./Pages/profile";
import LearningsPage from "./Pages/Learnings";
import ContactPage from "./Pages/ContactPage";
import React from "react";
import {Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {  
  return (
      <div>
        <Routes>
          <Route path="/" element={<Profile/>} />
          <Route path="/learnings" element={<LearningsPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </div>
  );
};



export default App;



