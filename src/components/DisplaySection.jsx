import DisplayEducation from "./DisplayEducation";
import DisplayExperience from "./DisplayExperience";
import DisplayGeneralInfo from "./DisplayGeneralInfo";

function DisplaySection({
  onGeneralInfoSetEditMode,
  onEducationSetEditMode,
  onExperienceSetEditMode,
}) {
  return (
    <div className="display-section">
      <DisplayGeneralInfo onSetEditMode={onGeneralInfoSetEditMode} />
      <DisplayEducation onSetEditMode={onEducationSetEditMode} />
      <DisplayExperience onSetEditMode={onExperienceSetEditMode} />
    </div>
  );
}

export default DisplaySection;
