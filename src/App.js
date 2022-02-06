import './App.css';
import logo from './logo.svg';
import Projects from './sections/projects';
import Home from './sections/home';
import About from './sections/about';
import Skills  from './sections/skills';
import Contact from './sections/contact';
import Education from './sections/education';
import Experience from './sections/experience';
import Blog from './sections/blog';
import ParticleBackground from './particle-background';
import Navigation from './components/navigation';
import QLinks from './sections/qlinks';

const App = () => {
  return (
    <div id="app">
        <ParticleBackground></ParticleBackground>
        <div id="portfolio-body">
            <Navigation></Navigation>
            <div className='container'>
              <Home></Home>
              <About></About>
              <Education></Education>
              <Experience></Experience>
              <Skills></Skills>
              <Projects></Projects>
              {/* <Blog></Blog> */}
              <Contact></Contact>
              <QLinks></QLinks>
            </div>
        </div>
    </div>
  );
};



export default App;



