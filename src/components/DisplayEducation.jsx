import resumeData from "../resumeData";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function DisplayEducationItem({ educationItem, onSetEditMode }) {
  return (
    <div className="education-item">
      <div className="school-end-date-section">
        <p className="display-school-name">{educationItem.schoolName}</p>
        <p className="display-end-date">{educationItem.endDate}</p>
      </div>
      <p className="display-study-title">{educationItem.studyTitle}</p>
      <EditButton handleClick={onSetEditMode} />
      <DeleteButton />
    </div>
  );
}

function DisplayEducation({ onSetEditMode }) {
  const educationList = resumeData.education;

  return (
    <div id="display-education">
      <h3>Education</h3>
      <div className="display-education-list">
        {educationList.map((educationItem) => {
          return (
            <DisplayEducationItem
              educationItem={educationItem}
              key={crypto.randomUUID()}
              onSetEditMode={onSetEditMode}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DisplayEducation;
