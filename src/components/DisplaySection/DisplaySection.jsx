import DisplayEducation from "./DisplayEducation";
import DisplayExperience from "./DisplayExperience";
import DisplayGeneralInfo from "./DisplayGeneralInfo";

function DisplaySection({
  dataEditMode,
  currentResumeData,
  onGeneralInfoSetEditMode,
  onEducationSetEditMode,
  onExperienceSetEditMode,
  onChangeEducationItemToEdit,
  onChangeExperienceItemToEdit,
  onDeleteGeneralInfoData,
  onDeleteEducationItem,
  onDeleteExperienceItem,
}) {
  return (
    <div className="display-section">
      <div className="display-container">
        <DisplayGeneralInfo
          onSetEditMode={onGeneralInfoSetEditMode}
          onDeleteData={onDeleteGeneralInfoData}
          general={currentResumeData.generalInfo}
        />
        <DisplayEducation
          editMode={dataEditMode.education}
          educationList={currentResumeData.education}
          onSetEditMode={onEducationSetEditMode}
          onChangeItemToEdit={onChangeEducationItemToEdit}
          onDeleteItem={onDeleteEducationItem}
        />
        <DisplayExperience
          editMode={dataEditMode.experience}
          experienceList={currentResumeData.experience}
          onSetEditMode={onExperienceSetEditMode}
          onChangeItemToEdit={onChangeExperienceItemToEdit}
          onDeleteItem={onDeleteExperienceItem}
        />
      </div>
    </div>
  );
}

export default DisplaySection;
