/* eslint-disable react/prop-types */

const Header = ({ data }) => {
  const locationParts = [data.city, data.postalCode, data.country].filter(Boolean);
  const location = locationParts.join(", ");

  const contactItems = [location, data.phone, data.email].filter(Boolean);

  return (
    <div className="header">
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <h2>{data.jobTitle}</h2>
      <p>
        {contactItems.map((item, index) => (
          <span key={index}>
            {item}
            {index < contactItems.length - 1 && " | "}
          </span>
        ))}
        {contactItems.length > 0 && data.links.length > 0 && " | "}
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