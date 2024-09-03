import { useEffect, useState } from "react";
import Slider from "react-slick";
import HTMLImage from "../assets/Image/logo/html.png";
import CSSImage from "../assets/Image/logo/css.png";
import JavaScriptImage from "../assets/Image/logo/javascript.png";
import ReactImage from "../assets/Image/logo/react.png";
import AdobeImage from "../assets/Image/logo/adobephotoshop.png";
import BlenderImage from "../assets/Image/logo/blender.png";
import GithubImage from "../assets/Image/logo/githublogo.png";
import JavaImage from "../assets/Image/logo/javalogo.png";
import UnityImage from "../assets/Image/logo/unity.png";
import PythonImage from "../assets/Image/logo/pythonlogo.png";
import Project1 from "../assets/Image/backgroundimage/junkshooter.png";
import Project2 from "../assets/Image/backgroundimage/carcue.png";
import Project3 from "../assets/Image/backgroundimage/Arkadia.png";
import Project4 from "../assets/Image/backgroundimage/defensys.png";
import Project5 from "../assets/Image/backgroundimage/worldbex.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const Portfolio = () => {
  const skills = [
    { name: "HTML", image: HTMLImage },
    { name: "CSS", image: CSSImage },
    { name: "JavaScript", image: JavaScriptImage },
    { name: "React", image: ReactImage },
    { name: "Adobe Photoshop", image: AdobeImage },
    { name: "Blender", image: BlenderImage },
    { name: "Github", image: GithubImage },
    { name: "Java", image: JavaImage },
    { name: "Unity", image: UnityImage },
    { name: "Python", image: PythonImage },
  ];

  const projects = [
    {
      name: "Junk Shooter",
      image: Project1,
      description:
        "This mobile game educates players on the benefits of healthy eating and the drawbacks of junk food. Through interactive gameplay, players learn to make nutritious choices and see the positive impacts of healthy foods while uncovering the negative effects of unhealthy options. With engaging challenges and informative content, the game helps players understand dietary concepts and promotes better eating habits in a fun and interactive way, making nutrition education accessible and enjoyable.",
      link: "https://link-to-junk-shooter.com",
    },
    {
      name: "Carcue",
      image: Project2,
      description:
        "This app provides timely notifications to users about their car's maintenance needs and part replacements. It tracks vehicle performance and schedules, alerting users when it’s time for routine maintenance or when specific components require attention. By offering reminders and detailed information, the app helps ensure that cars remain in optimal condition, reducing the risk of breakdowns and extending the vehicle’s lifespan. This proactive approach simplifies car care and keeps users informed about essential upkeep tasks.",
      link: "https://link-to-carcue.com",
    },
    {
      name: "Arkadia",
      image: Project3,
      description:
        "In this captivating low-poly game, players take on the crucial role of protecting endangered animals from poachers. Set in vividly stylized environments like jungles, savannahs, and tundras, the game offers an immersive experience. Players must strategically execute missions to stop poachers, rescue animals, and safeguard their habitats. The gameplay focuses on tactical decision-making and resource management, blending real-world conservation challenges into its narrative. This approach not only entertains but also educates players on the importance of wildlife protection.",
      link: "https://link-to-arkadia.com",
    },
    {
      name: "Worldbex",
      image: Project5,
      description:
        "I upgraded the user interface (UI) of the Worldbex website, preserving and enhancing existing design elements while integrating modern design concepts to create a more aesthetically pleasing and intuitive experience. I transitioned state management from Redux to Zustand, which improved performance, accelerated state handling, and simplified the architecture. This shift also facilitated easier codebase expansion and maintenance. My goal was to make the website more functional and enjoyable for users, ensuring it aligns with contemporary standards and expectations.",
      link: "https://worldbex.com/profile/login/",
    },
    {
      name: "Defensys",
      image: Project4,
      description:
        "Defensys is a comprehensive Disaster Risk Reduction Management (DRRM) platform that centrally monitors weather, earthquakes, emergencies, and CCTVs. It integrates various systems and services, utilizing advanced technology to track real-time data, generate detailed reports, and initiate responses when necessary. By providing centralized monitoring and actionable insights, Defensys enhances preparedness and ensures swift, coordinated action during disasters, making it an essential tool for effective risk management and emergency response.",
      link: "https://defensys.ph",
    },
  ];

  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateSkills(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container m-auto px-4 sm:py-12">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-11">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="p-5">
              <div className="flex items-center border border-gray-500 rounded-md p-5 bg-gray-800 h-96">
                {/* Text and Button Section */}
                <div className="w-1/2 pr-5 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 text-justify">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 rounded text-center"
                  >
                    View Project
                  </a>
                </div>

                {/* Image Section */}
                <div className="w-1/2 h-full">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover rounded-md shadow-lg"
                    alt={project.name}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto py-8 bg-black text-white">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Skills
        </h1>
        <div className="flex justify-center mt-8 flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`w-60 h-54 rounded border border-white overflow-hidden shadow-white m-4 skill-card ${
                animateSkills ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <img src={skill.image} alt={skill.name} className="w-full h-48" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
