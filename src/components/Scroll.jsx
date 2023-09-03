import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { StarsCanvas } from "./canvas";
import "/Hero.scss";


const Scroll = () => {
  return (
    <section >
      <div className="absolute bottom-32 w-full flex justify-center items-center">
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
              className="w-3 h-3 rounded-full bg-secondary bg=secondary mb-1"
            />
      
          </div>
        </a>
      </div>
    </section>
       
  );
};

export default Scroll;
