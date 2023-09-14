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
import "/ServiceCard.css"; // Corrected import paths
import "/Hero.scss"; // Corrected import paths
import {
  EditProfile,
  Login,
  Register,
  Workout,
  bybcover,
} from "../assets";


const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="card"
    >
      <div
       
        className="bg-primary rounded-[20px] py-5 px-12 flex flex-wrap justify-evenly items-center flex-col"
      >
        <div className="gradient-image">
     
        </div>

        <h3 className=" text-white text-[20px] font-black text-center">
          <span className="texttitle" style={{ fontFamily: "Trap" }}>
            {title}
          </span>
        </h3>
      </div>
    </div>
  </div>
);

const BeatYourBestPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  const fadeInFromTopVariants = {
    hidden: { opacity: 0, translateY: -50 }, // Start with opacity 0 and translateY -20
    visible: { opacity: 1, translateY: 0 }, // End with opacity 1 and translateY 0
  };
  return (
    <div>
      <div >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
         
          viewport={{ once: true, amount: 0.8 }}
          className={styles.sectionHeadText}
          style={{ textAlign: "center", fontFamily: "Trap" }}
        >
          <span className="text">Beat Your Best App</span>
        </motion.div>
        <p className="flex flex-wrap justify-center text-center">
          Role: Developer & Designer | Tech: Java, Android Studio, Firebase
        </p>
        <img
          src="./src/assets/beatyourbest2.png"
          alt="Beat Your Best"
          className="flex w-auto h-full object-cover rounded-2xl"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.9 }}
      >
      <p
        // variants={fadeIn("", "", 1, 1)}
        className="flex flex-wrap justify-center mt-4  text-secondary text-[17px]  leading-[30px]"
        style={{ marginLeft: "10%", marginRight: "10%" }}
      >
        "Beat Your Best" is a feature-rich workout tracking application designed
        for gym and fitness enthusiasts. Developed using Java and Android
        Studio, this app provides users with a comprehensive platform to monitor
        and improve their fitness journey. Key features include integration with
        Firebase Authentication for secure user access and a public API called
        ExerciseDB for access to a vast database of exercises and workout
        routines.
      </p>
      </motion.div>
      {/* Login and Register */}
      <div>
        <div className="flex flex-wrap gap-10 justify-center my-20 ">
          <img src={Login} className="w-auto h-[500px]" />
          <img src={Register} className="w-auto h-[500px]" />
          <motion.p
              initial={{ opacity: 0, x: -50 }} // Start with opacity 0 and translate 50 units to the left
              animate={{ opacity: 1, x: 0 }} // End with opacity 1 and no translation (x: 0)
              transition={{ duration: 3 }} // You can adjust the duration as needed
            className="flex flex-col justify-center"
          >
            Powered by Firebase,
            <br />
            users can register and login
            <br />
            to their accounts securely.
          </motion.p>
        </div>
      </div>

      <p
        // variants={fadeIn("", "", 1, 1)}
        className="flex justify-center my-10  text-secondary text-[17px]  leading-[30px]"
      >
        Users can add their own exercises and workout routines to the app.
      </p>
      <div>
        <div className="flex flex-wrap gap-10 justify-center  ">
          <img src={Workout} className="w-auto h-[500px]" />
          <img src={WorkoutName} className="w-auto h-[500px]" />
          <img src={WorkoutRoutineAdded} className="w-auto h-[500px]" />
          <img src={Exercise} className="w-auto h-[500px]" />
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-center my-20 ">
        {" "}
        <p
          // variants={fadeIn("left", "", 2, 1)}
          className="flex flex-col justify-center text-right"
        >
          Search from a vast
          <br />
          database of exercises
          <br />
          and view video instructions
          <br />
          on how to perform them.
        </p>
        <img src={SearchExercises} className="w-auto h-[600px]" />
      </div>
      <p
        // variants={fadeIn("", "", 2, 1)}
        className="flex flex-wrap justify-center my-10  text-secondary text-[17px]  leading-[30px]"
      >
        Create, start, and review your workouts and continue to Beat Your Best!
      </p>

      <div className="flex flex-wrap gap-10 justify-center  ">
        <img src={ExerciseName} className="w-auto h-[500px]" />
        <img src={StartWorkout} className="w-auto h-[500px]" />
        <img src={HistoryImg} className="w-auto h-[500px]" />
      </div>

      <div
        onClick={() =>
          window.open("https://github.com/kenleano/BeatYourBestApp", "_blank")
        }
        className="flex  items-center justify-center my-20"
      >
        <button className="flex items-center space-x-2 rounded-2xl px-5 py-2 bg-slate-500 hover:bg-slate-800">
          <img src={github} alt="source code" className="h-5" />
          <span className="text-sm sm:text-base">Github</span>
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(BeatYourBestPage, "BeatYourBestPage");
