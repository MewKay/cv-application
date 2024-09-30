import DisplayEducation from "./DisplayEducation";
import DisplayExperience from "./DisplayExperience";
import DisplayGeneralInfo from "./DisplayGeneralInfo";

function DisplaySection({
  dataEditMode,
  onGeneralInfoSetEditMode,
  onEducationSetEditMode,
  onExperienceSetEditMode,
  onChangeEducationItemToEdit,
  onChangeExperienceItemToEdit,
}) {
  return (
    <div className="display-section">
      <DisplayGeneralInfo onSetEditMode={onGeneralInfoSetEditMode} />
      <DisplayEducation
        editMode={dataEditMode.education}
        onSetEditMode={onEducationSetEditMode}
        onChangeItemToEdit={onChangeEducationItemToEdit}
      />
      <DisplayExperience
        editMode={dataEditMode.experience}
        onSetEditMode={onExperienceSetEditMode}
        onChangeItemToEdit={onChangeExperienceItemToEdit}
      />
    </div>
  );
}

export default DisplaySection;
