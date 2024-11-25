/* eslint-disable react/prop-types */

const Section = ({ title, children }) => {
    return (
      <div className="section">
        <h3>{title}</h3>
        {children}
      </div>
    );
  };
  
  export default Section;