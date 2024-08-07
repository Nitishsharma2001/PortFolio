// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/nav';
// import Home from './components/home';
// import Sidebar from './components/sidebar';
// import About from './components/about';
// import Projects from './components/projects';
// import Contact from './components/contact';
// import Footer from './components/footer';

// function App() {
//   return (

//     <div className="App">
//       <Navbar className="nav"></Navbar>
//       <div id="home">
//         <Home className="home"></Home>
//       </div>
//       <Sidebar></Sidebar>
//       <div id="about">
//         <About className="about"></About>
//       </div>
//       <div id="projects">
//         <Projects className="projects"></Projects>
//       </div>
//       <div id="contact">
//         <Contact className="contact"></Contact>
//       </div>
//       <Footer className="footer"></Footer>
//     </div>

//   );
// }

// export default App;



import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav';
import Home from './components/home';
import Sidebar from './components/sidebar';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import { useRef } from 'react';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <div ref={homeRef} id="home">
        <Home className="home" />
      </div>
      <Sidebar></Sidebar>
      <div ref={aboutRef} id="about">
        <About className="about" />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects className="projects" />
      </div>
      <div ref={contactRef} id="contact">
        <Contact className="contact" />
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
