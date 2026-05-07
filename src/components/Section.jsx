/* eslint-disable react/prop-types */

const Section = ({ title, children, className = "" }) => {
    return (
      <div className={`section ${className}`.trim()}>
        <h3>{title}</h3>
        {children}
      </div>
    );
  };
  
  export default Section;
