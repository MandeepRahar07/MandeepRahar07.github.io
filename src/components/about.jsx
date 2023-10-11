import React, { useEffect } from "react";
import resume from "../resume/Mandeep_rahar_resume.pdf";
import AOS from "aos";

export default function About() {
  const handleDownload = () => {
    window.open(resume, '_blank');
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="about section sections"
      id="about"
      style={{ marginTop: "130px" }} // Add inline CSS to control margin
    >
      <h1
        data-aos="fade-up"
        className="heading"
        style={{ marginBottom: "30px" }} // Add inline CSS to control margin
      >
        <span className="sauce">About Me</span>
      </h1>
      <div>
        <div
          data-aos="fade-up"
          className="first"
          style={{ fontSize: "18px", lineHeight: "1.5" }} // Add inline CSS for font size and line height
        >
          <p id="user-detail-intro">
            Welcome to my coding realm, where I transform coffee into lines of
            code!{" "}
            <p style={{ display: "inline-block" }} className="sauce">
              I'm Mandeep
            </p>
            , a proficient full stack web developer. My expertise spans across
            HTML5, CSS3, JavaScript, ReactJs, NodeJs, Express, and I'm
            well-versed in working with database technologies like MongoDB. My
            true passion lies in crafting websites that not only boast
            impressive aesthetics but also elicit exclamations of delight from
            users. I strive for excellence and pay meticulous attention to
            detail, enabling me to conquer even the most intricate coding
            challenges. When I'm not engrossed in coding, I love immersing
            myself in the latest tech trends and exploring new possibilities in
            the digital world.
            <br />
          </p>
          <br />
        </div>
        <a
          onClick={handleDownload}
          rel="noreferrer"
          href={resume}
          download={"Mandeep_Rahar_Resume"}
          id="resume-button-2"
          className="contact-button resume-button second-btn"
          // style={{
          //   display: "block",
          //   marginTop: "20px", // Add inline CSS for margin
          //   padding: "10px 20px", // Add inline CSS for padding
          //   backgroundColor: "#007BFF", // Add inline CSS for background color
          //   color: "#fff", // Add inline CSS for text color
          //   textDecoration: "none", // Add inline CSS for text decoration
          //   borderRadius: "5px", // Add inline CSS for border radius
          //   fontWeight: "bold", // Add inline CSS for font weight
          //   cursor: "pointer", // Add inline CSS for cursor
          // }}
        >
          Resume
        </a>
      </div>
    </section>
  );
}
