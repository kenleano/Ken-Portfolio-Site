import { BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
      <div className="aurora bg-primary ">
        <div className=" bg-cover bg-no-repeat bg-center">
          <div className="relative z-0">
            <Navbar />
            <Hero />
            <Tilt 
            tiltMaxAngleX={8} tiltMaxAngleY={8}>
            
              <Empty />
              <StarsCanvas />
            </Tilt>
          </div>
        </div>
        <div>
          <About />
        </div>
        <div>
          <Experience />
        </div>
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
