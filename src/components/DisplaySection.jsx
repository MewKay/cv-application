import DisplayEducation from "./DisplayEducation";
import DisplayExperience from "./DisplayExperience";
import DisplayGeneralInfo from "./DisplayGeneralInfo";

function DisplaySection({
  dataEditMode,
  onGeneralInfoSetEditMode,
  onEducationSetEditMode,
  onExperienceSetEditMode,
  onChangeEducationItemToEdit,
}) {
  return (
    <div className="display-section">
      <DisplayGeneralInfo onSetEditMode={onGeneralInfoSetEditMode} />
      <DisplayEducation
        editMode={dataEditMode.education}
        onSetEditMode={onEducationSetEditMode}
        onChangeItemToEdit={onChangeEducationItemToEdit}
      />
      <DisplayExperience onSetEditMode={onExperienceSetEditMode} />
    </div>
  );
}

export default DisplaySection;
