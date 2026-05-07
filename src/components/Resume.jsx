/* eslint-disable react/prop-types */

import Header from "./Header";
import Section from "./Section";
import EmploymentHistory from "./EmploymentHistory";
import Skills from "./Skills";

const Resume = ({ data }) => {
  return (
    <div className="container">
      <Header data={data} />
      <Section title="Summary">
        <p>{data.professionalSummary}</p>
      </Section>
      <Skills skills={data.skills} />
      <EmploymentHistory jobs={data.employmentHistory} />
      <Section title="Education">
        {data.education.map((edu, index) => (
          <div key={index} className="education">
            <h4>{edu.degree} - {edu.description}</h4>
            <p>
              {edu.school} ({edu.graduationDate})
            </p>
          </div>
        ))}
      </Section>
      {data.publications?.length > 0 && (
        <Section title="Publications" className="publications-section">
          {data.publications.map((publication, index) => (
            <div key={index} className="publication">
              <h4>{publication.title}</h4>
              <p>
                {publication.date} - {publication.publication}
                {publication.doi && " DOI: "}
                {publication.doi && publication.link ? (
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {publication.doi}
                  </a>
                ) : (
                  publication.doi
                )}
              </p>
            </div>
          ))}
        </Section>
      )}
      {/* <Section title="Languages">
        <ul className="languages">
          {data.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </Section> */}
    </div>
  );
};

export default Resume;
