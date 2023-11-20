import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { StarsCanvas } from "./canvas";
import "/Hero.scss";

const Hero = () => {
  return (
    <section>
      <div
        className={`${styles.paddingX} absolute inset-0 top-0 flex flex-row gap-5 justify-center items-center`}
      >
        <div className="text-center">
          {/* <h1 className={`${styles.heroText}`}> */}
          <h1 className="lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]">
            <span class="text">Kenneth Leaño</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100`}>
            Developer | Designer
          </p>
         
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
