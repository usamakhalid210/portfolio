import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container nav-bar"
      data-aos="fade-down"
      data-aos-duration="1000"
      >
        <div className="left"> <a href="" className="nav-items " style={{fontSize:'2rem', border:'1px solid gray', borderRadius:'100%',}} >Portfolio</a></div>
        <div className="right">
          <a href="#home" className="nav-items">Home</a>
          <a href="#experience" className="nav-items">Experience</a>
          <a href="#skill" className="nav-items">Skill </a>
          <a href="#projects" className="nav-items">Projects</a>
          <a href="#contact" className="nav-items">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
