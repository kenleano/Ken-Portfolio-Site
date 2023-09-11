
import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  Exercise,
  ExerciseName,
  HistoryImg,
  SearchExercises,
  StartWorkout,
  WorkoutName,
  WorkoutRoutineAdded,
  github,
} from "../assets";
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

const BeatYourBestPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);
  return (
    <div>
      <motion.div variants={textVariant()} className="mt-5">
        <h2
          className={styles.sectionHeadText}
          style={{ textAlign: "center", fontFamily: "Trap" }}
        >
          <span class="text">Beat Your Best App</span>
        </h2>
        <p className="flex justify-center">
          Role: Developer & Designer | Tech: Java, Android Studio, Firebase
        </p>
        <img
          src="./src/assets/beatyourbest2.png"
          alt="Beat Your Best"
          className="w-full h-full object-cover rounded-2xl"
        />
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 1, 1)}
        className="flex justify-center mt-4  text-secondary text-[17px]  leading-[30px]"
        style={{ marginLeft: "10%", marginRight: "10%" }}
      >
        "Beat Your Best" is a feature-rich workout tracking application designed
        for gym and fitness enthusiasts. Developed using Java and Android
        Studio, this app provides users with a comprehensive platform to monitor
        and improve their fitness journey. Key features include integration with
        Firebase Authentication for secure user access and a public API called
        ExerciseDB for access to a vast database of exercises and workout
        routines.
      </motion.p>
      {/* Login and Register */}
      <div>
        <motion.div className="flex gap-10 justify-center my-20 ">
          <img src={Login} className="w-auto h-[500px]" />
          <img src={Register} className="w-auto h-[500px]" />
          <motion.p
            variants={fadeIn("left", "", 1, 1)}
            className="flex flex-col justify-center"
          >
            Powered by Firebase,
            <br />
            users can register and login
            <br />
            to their accounts securely.
          </motion.p>
        </motion.div>
      </div>

      <motion.p
        variants={fadeIn("", "", 1, 1)}
        className="flex justify-center my-10  text-secondary text-[17px]  leading-[30px]"
      >
        Users can add their own exercises and workout routines to the app.
      </motion.p>
      <div>
        <motion.div className="flex gap-10 justify-center  ">
          <img src={Workout} className="w-auto h-[500px]" />
          <img src={WorkoutName} className="w-auto h-[500px]" />
          <img src={WorkoutRoutineAdded} className="w-auto h-[500px]" />
          <img src={Exercise} className="w-auto h-[500px]" />
        </motion.div>
      </div>

      <div className="flex gap-10 justify-center my-20 ">
        {" "}
        <motion.p
          variants={fadeIn("left", "", 2, 1)}
          className="flex flex-col justify-center text-right"
        >
          Search from a vast 
          <br />
          database of exercises
          <br />
          and view video instructions
          <br />
          on how to perform them.
        </motion.p>
        <img src={SearchExercises} className="w-auto h-[600px]" />
      </div>
      <motion.p
        variants={fadeIn("", "", 2, 1)}
        className="flex justify-center my-10  text-secondary text-[17px]  leading-[30px]"
      >
       Create, start, and review your workouts and continute to Beat Your Best!
      </motion.p>

        <div className="flex gap-10 justify-center  ">
     
          <img src={ExerciseName} className="w-auto h-[500px]" />
          <img src={StartWorkout} className="w-auto h-[500px]" />
          <img src={HistoryImg} className="w-auto h-[500px]" />
        </div>
   


      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 rounded-[20px] py-5 px-12">
        {bybimages.map((image, index) => (
          <motion.div
            variants={fadeIn("down", "spring", index * 0.5, 0.75)}
            key={index}
          >
            <img src={image.src} alt={image.alt} className="w-full" />
          </motion.div>
        ))}
      </div> */}

       <div
        onClick={() =>
          window.open("https://github.com/kenleano/BeatYourBestApp", "_blank")
        }
        className="flex items-center justify-center my-20"
      >
        <button className="flex items-center space-x-2 rounded-2xl px-5 py-2 bg-slate-500 hover:bg-slate-800">
          <img src={github} alt="source code" className="h-5" />{" "}
          
          <span className="text-sm sm:text-base">Github</span>
        </button>
      </div> 
    </div>
  );
};

export default SectionWrapper(BeatYourBestPage, "BeatYourBestPage");
