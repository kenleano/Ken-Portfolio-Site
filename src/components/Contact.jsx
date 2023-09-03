import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//template_sp8fabl;
//service_hgd47qp
// 8kJrVst5x3b20HWTs
const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_hgd47qp",
        "template_sp8fabl",
        {
          from_name: form.name,
          to_name: "Kenneth",
          from_email: form.email,
          to_email: "kenleano@gmail.com",
          message: form.message,
        },
        "user_8kJrVst5x3b20HWTs"
      )
      .then(
        (res) => {
          setLoading(false);
          alert("Message sent successfully");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong, please try again");
        }
      );
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row
   flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        ></form>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name"
            className="bg-tertiary py-4 px-6
             placeholder:text-secondary
              text-white rounded-lg outlined-none
               border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Email</span>
          <input
            type="text"
            name="name"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email"
            className="bg-tertiary py-4 px-6
             placeholder:text-secondary
              text-white rounded-lg outlined-none
               border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Message</span>
          <textarea
            rows="7"
            type="text"
            name="name"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className="bg-tertiary py-4 px-6
             placeholder:text-secondary
              text-white rounded-lg outlined-none
               border-none font-medium"
          />
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-non w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </label>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
