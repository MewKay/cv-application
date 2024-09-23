import resumeData from "../resumeData";

function DisplayEducationItem({ educationItem }) {
  return (
    <div className="education-item">
      <div className="school-end-date-section">
        <p className="display-school-name">{educationItem.schoolName}</p>
        <p className="display-end-date">{educationItem.endDate}</p>
      </div>
      <p className="display-study-title">{educationItem.studyTitle}</p>
    </div>
  );
}

function DisplayEducation() {
  const educationList = resumeData.education;

  return (
    <div id="display-education">
      <h3>Education</h3>
      <div className="display-education-list">
        {educationList.map((educationItem) => {
          return (
            <DisplayEducationItem
              educationItem={educationItem}
              key={crypto.randomUUID}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DisplayEducation;
