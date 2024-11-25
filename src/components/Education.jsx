/* eslint-disable react/prop-types */

const Education = ({ education }) => {
    return (
      <section className="education">
        <h2 className="title">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="record">
            <h3>{edu.degree} - {edu.school}</h3>
            <p>{edu.graduationDate}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </section>
    );
  };
  
  export default Education;