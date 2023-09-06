import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import "/TechMarquee.css"; // Import a CSS file for styling

const Tech = () => {
  return (
    <div className="logos">
      <div className="logos-slide">
        <div className="flex justify-center">
          {technologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
       
      </div>
   
    </div>
  );
};

export default SectionWrapper(Tech, "");
