import React from 'react';
// import React from '.../assets/Skill/html.png';

const images = [
  // { id: 1, title: "HTML", imageSrc: ".../assets/Skill/html.png" },
  { id: 1, title: "HTML", imageSrc: "/assets/skill/html.png" },
  { id: 2, title: "CSS", imageSrc: "/assets/skill/css.png" },
  { id: 3, title: "JavaScript", imageSrc: "/assets/skill/javascript.png" },
  { id: 4, title: "React", imageSrc: "/assets/skill/react.png" },
  { id: 5, title: "Node", imageSrc: "/assets/skill/node.png" },
  { id: 6, title: "Firebase", imageSrc: "/assets/skill/firebase.png" },
  { id: 7, title: "GraphQL", imageSrc: "/assets/skill/graphql.png" },
  { id: 8, title: "MongoDB", imageSrc: "/assets/skill/mongodb.png" },
  { id: 9, title: "Figma", imageSrc: "/assets/skill/figma.png" }
];

const Skill = () => {
  return (
    <div className='container skills' id='skill'>
      <h1>SKILLS</h1>

      <div className="items">
        {images.map((data) => (
          <div className="item" key={data.id}     
          data-aos="flip-right"
      data-aos-duration="1000">
            <img src={data.imageSrc} alt={data.title} />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
