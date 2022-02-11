import './App.css';
import Projects from './sections/projects';
import Home from './sections/home';
import About from './sections/about';
import Skills from './sections/skills';
import Contact from './sections/contact';
import Education from './sections/education';
import Experience from './sections/experience';
import ParticleBackground from './particle-background';
import Navigation from './components/navigation';
import QLinks from './sections/qlinks';
import Certifications from './sections/certification';

const App = () => {
  document.title = "Sai Shanmukkha - Profile"
  return (
    <div>
      <ParticleBackground></ParticleBackground>
      <Navigation></Navigation>
      <div className='container'>
        <Home></Home>
        <About></About>
        <Education></Education>
        <Experience></Experience>
        <Skills></Skills>
        <Certifications></Certifications>
        <Projects></Projects>
        <Contact></Contact>
        <QLinks></QLinks>
      </div>
    </div>


  );
};



export default App;



