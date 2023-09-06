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
      <Navbar />
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
        
        <div  className="overflow-hidden">
        <Tech/>
        </div>
        <Works />
        <Experience />

       

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
