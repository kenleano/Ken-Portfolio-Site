import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import "/ServiceCard.css";
import "/Background.css";
import "/Hero.scss";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
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
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
     <div class="gradient-image">
        <img
          src={icon}
          alt='web-development'
          class='gradient-image'
          className='w-16 h-16 object-contain'
         
        />
           <div class="gradient-mask"></div>
          
        
        </div>

        <h3 className=' text-white text-[20px] font-black text-center'>
          <span class='texttitle' >
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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I'm a computer and information systems student at Douglas College by day and designer by night. 
       My goal is to combine creative thinking and technical skills to develop and design beautiful websites and applications.
       Before becoming a developer, I worked as an Art Director in advertising creating ad campaigns for some of the Philippines' #1 brands.
       <br />
       I work great in teams, and I'm always looking for opportunities to learn and grow!
  
      
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       
       <br />
       Front-End: React.js, Next.js, Three.js, HTML, CSS, SCSS, JavaScript, Tailwind CSS
        <br />
        Back-End: Node.js, Express.js, MongoDB, Firebase
        <br />
      Design: Figma, Adobe Photoshop, Adobe Illustrator, Adobe After Effects
      <br />
      Tools: Git, Github, Vercel, VSCode, Android Studio
      <br/>
      
      </motion.p>
      
    </div>
  );
};

export default SectionWrapper(About, "about");