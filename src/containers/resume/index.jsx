import React, { useState } from "react";
import "./style.scss";
import ResumeScreenshot from "../../images/resume-screenshot.png"; // Your resume screenshot image

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  const handleShowResume = () => {
    setShowResume(!showResume);
  };

  return (
    <div className="resume-container">
      <button className="resume-button" onClick={handleShowResume}>
        {showResume ? "HIDE RESUME" : "SHOW RESUME"}
      </button>
      {showResume && (
        <div className="resume-image-wrapper">
          <img
            src={ResumeScreenshot}
            alt="Resume Screenshot"
            className="resume-image"
          />
        </div>
      )}
    </div>
  );
};

export default Resume;
