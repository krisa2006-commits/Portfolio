import React from "react";
import aboutData from "./AboutData";

const About = () => {
  return (
    <section className="about">
      <h2 className="about-heading">My Work</h2>
      <div className="about-boxes">
        {aboutData.map((item) => (
          <div className="box" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.value}</p>
            <span>{item.subTitle}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
