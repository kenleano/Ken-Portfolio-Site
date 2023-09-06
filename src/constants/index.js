import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    beatyourbest,
    mongodb,
    git,
    figma,
    docker,
    coalprints,
    pcv,
    jump,
    prestige,
    carrent,
    jobit,
    tripguide,
    threejs,
    graphic,
    motion,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Graphic Designer",
      icon: graphic,
    },
    {
      title: "Motion Graphics Animator",
      icon: motion,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Freelance Graphic Designer",
      company_name: "Prestigehaus.com",
      icon: prestige,
      iconBg: "#E6DEDD",
      date: "Oct 2020 - Present",
      points: [
        "Designed social media content for various platforms, delivered over 100 monthly social media materials, comprising 10 blog posts, 30 product social media cards, 21 Pinterest posts, 14 Instagram stories, and 14 Instagram/Facebook posts.",
      ],
    },
    {
      title: "Graphic Designer",
      company_name: "Coal Prints Inc.",
      icon: coalprints,
      iconBg: "#383E56",
      date: "Sep 2022 - Feb 2023",
      points: [
        "Communicated daily with new and existing customers, grasping their business problems, to create print designs that consistently met their objectives, resulting in the acquisition of new regular clients.",
        "Ensured error-free delivery of large-scale printed materials through quality control, adherence to specifications, and attention to detail. Consistently met deadlines by delivering over a thousand materials weekly.",
      ],
    },
   
    {
      title: "Art Director",
      company_name: "PCV Communications",
      icon: pcv,
      iconBg: "#383E56",
      date: "Sep 2017 - Sep 2020",
      points: [
        "Managed the creative art direction of 7 of the Philippines' no. 1 brands across diverse categories", 
"Facilitated the creation of several advertising campaigns in mediums like tv, print, and social media through collaboration with clients, cross-functional teams, and suppliers",

"Designed labels for countries including Canada, USA, Russia, Singapore, UAE, and the Philippines. Ensured that the packaging labels were visually appealing, effectively communicated product information in multiple languages, and met the specific requirements of each country",
      ],
    },
    {
      title: "Jr. Art Director",
      company_name: "Jump Digital Asia",
      icon: jump,
      iconBg: "#E6DEDD",
      date: "Apr 2016 - Sep 2017",
      points: [
        "Collaborated with a satellite office in Myanmar and contributed to the winning pitch for an integrated advertising campaign for ProCare Family Soap Myanmar from the development of the storyboard and key visual.",
"Leveraged consumer insights and data, conducted A/B testing to determine most effective advertising layouts to enhance social media content reaching monthly target engagements",
"Led the concept and design advertising development of Vivo Mobile on Facebook, which increased followers by one million in the first year of management.",
"Guided interns and new designers in their skills development while simultaneously overseeing other design responsibilities.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Beat Your Best",
      description:
        "Beat Your Best: Your ultimate workout tracker, powered by Firebase and ExerciseDB API. Discover exercises, filter by category, and achieve your fitness goals with ease.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "androidstudio",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: beatyourbest,
      source_code_link: "https://github.com/kenleano/BeatYourBestApp",
    },

    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };