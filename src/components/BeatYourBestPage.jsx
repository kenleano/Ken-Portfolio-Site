import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, bybimages } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import "/ServiceCard.css";
import "/Hero.scss";
import { EditProfile, Login, Register, Workout, bybcover } from "../assets";

const height = 50;

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      class="card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-primary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col"
      >
        <div class="gradient-image">
          {/* <img
          src={icon}
          alt='web-development'
          class='gradient-image'
          className='w-16 h-16 object-contain'
         
        /> */}
        </div>

        <h3 className=" text-white text-[20px] font-black text-center">
          <span class="texttitle" style={{ fontFamily: "Trap" }}>
            {title}
          </span>
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
       

        <h2
          className={styles.sectionHeadText}
          style={{ textAlign: "center", fontFamily: "Trap" }}
        >
          <span class="text2">Beat Your Best App</span>
        </h2>
        <img
          src="./src/assets/beatyourbest.png"
          alt="Beat Your Best"
          className="w-full h-full object-cover rounded-2xl"
        />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Beat Your Best: Your ultimate workout tracker, powered by Firebase and
        ExerciseDB API. Discover exercises, filter by category, and achieve your
        fitness goals with ease.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 rounded-[20px] py-5 px-12">
  {bybimages.map((image, index) => (
    <motion.div 
    variants={fadeIn("down", "spring", index * 0.5, 0.75)}
    key={index}>
      <img src={image.src} alt={image.alt} className="w-full" />
    </motion.div>
  ))}
</div>

    </div>
  );
};

export default SectionWrapper(About, "about");
