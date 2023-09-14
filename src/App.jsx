import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Works,
  Experience,
  Tech,
  Hero,
  Navbar,
  Feedbacks,
  Empty,
  Scroll,
  StarsCanvas,

} from "./components";
import "/Background.css";
import Tilt from "react-parallax-tilt";

const App = () => {
  return (
    <>
     
      <Navbar />
      <div className="aurora bg-primary overflow-hidden">
        <div className=" bg-cover bg-no-repeat bg-center">
          <div className="relative z-0">
            <Hero />

            <Tilt>
              <Empty />
              <StarsCanvas />
            </Tilt>
          </div>
        </div>
      
        <About />

        <div>
          <Tech />
        </div>
        <Works />
        <Experience />

        <div className="relative z-0">
          <Contact />
         
        </div>
      </div>
     
    </>
  );
};

export default App;
