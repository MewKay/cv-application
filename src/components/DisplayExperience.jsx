import resumeData from "../resumeData";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

function DisplayExperienceItem({ experienceItem, onSetEditMode }) {
  return (
    <div className="experience-item">
      <div className="company-name-duration-section">
        <p className="display-company-name">{experienceItem.companyName}</p>
        <p className="display-work-duration">{`${experienceItem.workStart} - ${experienceItem.workEnd}`}</p>
      </div>
      <p className="display-position-title">{experienceItem.positionTitle}</p>
      <ul className="main-resp-list-container">
        {experienceItem.mainResp.map((mainRespItem) => (
          <li key={crypto.randomUUID()}>{mainRespItem}</li>
        ))}
      </ul>
      <EditButton handleClick={onSetEditMode} />
      <DeleteButton />
    </div>
  );
}

function DisplayExperience({ onSetEditMode }) {
  const experienceList = resumeData.experience;

  return (
    <div id="display-experience">
      <h3>Experience</h3>
      <div className="display-education-list">
        {experienceList.map((experienceItem) => (
          <DisplayExperienceItem
            experienceItem={experienceItem}
            onSetEditMode={onSetEditMode}
            key={crypto.randomUUID()}
          />
        ))}
      </div>
    </div>
  );
}

export default DisplayExperience;
