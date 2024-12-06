/* eslint-disable react/prop-types */
import Section from "./Section";

const EmploymentHistory = ({ jobs }) => {
  return (
    <Section title="Work Experience">
      {jobs.map((job, index) => (
        <div key={index} className="job-item">
          <p className="job-title">
            {job.jobTitle} | {job.startDate} - {job.endDate}
          </p>
          <p className="job-employer">
            {job.employer}, {job.city}
          </p>
          <p className="job-technologies">
            <strong>Key Technologies:</strong> {job.technologies}
          </p>
          <ul className="job-achievements">
            {job.achievements.map((achievement, idx) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
};

export default EmploymentHistory;
