/* eslint-disable react/prop-types */

const Header = ({ data }) => {
  return (
    <div className="header">
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <h2>{data.jobTitle}</h2>
      <p>
        {data.city}, {data.country} | {data.phone} | {data.email} | {""}
        {data.links.map((link, index) => (
          <span key={index}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
            {index < data.links.length - 1 && " | "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Header;