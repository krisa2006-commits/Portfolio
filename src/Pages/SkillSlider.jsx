import React from "react";

const SkillSlider = () => {
  const skills = [
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      desc: "Web structure",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      desc: "Page styling",
    },
    {
      name: "Bootstrap",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      desc: "Responsive UI",
    },
    {
      name: "Tailwind CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      desc: "Utility CSS",
    },
    {
      name: "C",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      desc: "Basic programming",
    },
    {
      name: "C++",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      desc: "OOP & DSA",
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      desc: "Dynamic websites",
    },
    {
      name: "React JS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      desc: "Modern UI",
    },
    {
      name: "Node JS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      desc: "Backend runtime",
    },
    {
      name: "Express JS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      desc: "REST APIs",
    },
    {
      name: "MongoDB",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      desc: "NoSQL database",
    },
    {
      name: "Git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      desc: "Version control",
    },
    {
      name: "GitHub",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      desc: "Code hosting",
    },
  ];

  const data = skills.map((item, index) => {
    return (
      <div className="card" key={index}>
        <img src={item.img} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
      </div>
    );
  });

  return (
    <section className="skill-slider">
      <div className="skill-heading">
        <h2>My Skills</h2>
      </div>

      <div className="slider-track">
        {data}
        {data}
      </div>
    </section>
  );
};

export default SkillSlider;
