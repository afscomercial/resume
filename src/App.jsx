import Resume from "./components/Resume";
import { resumeData } from "./data/resumeData";
import html2pdf from "html2pdf.js";
import "./index.scss";

const App = () => {
  const downloadPDF = () => {
    const element = document.querySelector(".container");

    // Clone the container and append print styles
    const clonedElement = element.cloneNode(true);
    const printStyles = `
     <style>
      body {
        font-size: 10px;
        margin: 0;
        padding: 0;
        background: white;
      }

      .container {
        max-width: 100%;
        padding: 10px;
        margin: 0;
        box-shadow: none;
        border-radius: 0;
      }

      .header h1 {
        font-size: 10px;
      }

      .header h2 {
        font-size: 10px;
      }

      .header p {
        font-size: 10px;
      }

      .section {
        margin-bottom: 10px;
      }

      .section p {
        font-size: 9px;
      }

      .section h3 {
        font-size: 10px;
        margin-bottom: 5px;
        border-bottom: 1px solid #ddd;
      }

      .job-title,
      .job-employer,
      .job-technologies,
      .job-description,
      .job-achievements {
        font-size: 9px;
        margin-bottom: 3px;
      }

      .job-achievements li {
        margin-bottom: 2px;
      }

      .employment-history {
        page-break-inside: avoid;
      }

      .skills-list {
        display: block;
        margin: 0;
        padding: 0;
      }

      .skill-item {
        display: inline;
        margin: 0;
        border: none;
        font-size:10px;
      }

      .skill-item + .skill-item::before {
        content: " - ";
      }

      .skill-item:last-child::after {
        content: "";
      }

      .list {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .education {
        font-size: 9px;
        margin-bottom: 2px;
      }

      .languages{
          margin-top: 8px;
          font-size: 9px;
          display: inline; 
          padding: 0;
          margin: 0;

          li {
            display: inline; 
            margin: 0;
            list-style: none; 
          }

          li + li::before {
            content: " | "; 
            margin: 0 5px; 
          }
        }

      a {
        text-decoration: none;
        color: black;
        font-size: 10px;
      }

      .section-title {
        font-size: 10px;
        margin-bottom: 5px;
        padding-bottom: 2px;
        border-bottom: 1px solid #ddd;
      }
    </style>
    `;
    clonedElement.insertAdjacentHTML("beforeend", printStyles);

    const wrapper = document.createElement("div");
    wrapper.appendChild(clonedElement);

    const options = {
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(wrapper).save();
  };

  return (
    <div>
      <button onClick={downloadPDF} className="download-btn">
        Download PDF
      </button>
      <Resume data={resumeData} />
    </div>
  );
};

export default App;
