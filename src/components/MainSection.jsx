import EditSection from "./EditSection";
import DisplaySection from "./DisplaySection";
import { useState } from "react";
import resumeData from "../resumeData";

function MainSection() {
  const [currentResumeData, setCurrentResumeData] = useState(
    structuredClone(resumeData)
  );
  const [dataEditMode, setDataEditMode] = useState({
    generalInfo: false,
    education: false,
    experience: false,
  });
  const [educationItemIndexToEdit, setEducationItemIndexToEdit] = useState(0);
  const [experienceItemIndexToEdit, setExperienceItemIndexToEdit] = useState(0);

  function handleGeneralInfoSetEditMode() {
    setDataEditMode({ ...dataEditMode, generalInfo: true });
  }

  function handleEducationSetEditMode() {
    setDataEditMode({ ...dataEditMode, education: true });
  }

  function handleExperienceSetEditMode() {
    setDataEditMode({ ...dataEditMode, experience: true });
  }

  function handleGeneralInfoEditModeReset() {
    setDataEditMode({ ...dataEditMode, generalInfo: false });
  }

  function handleEducationEditModeReset() {
    setDataEditMode({ ...dataEditMode, education: false });
  }

  function handleExperienceEditModeReset() {
    setDataEditMode({ ...dataEditMode, experience: false });
  }

  function handleChangeEducationItemToEdit(index) {
    setEducationItemIndexToEdit(index);
  }

  function handleChangeExperienceItemToEdit(index) {
    setExperienceItemIndexToEdit(index);
  }

  function handleGeneralInfoSave(editedGeneralInfo) {
    setCurrentResumeData({
      ...currentResumeData,
      generalInfo: editedGeneralInfo,
    });
  }

  function handleEducationSave(editedEducationItem) {
    const { index, data } = editedEducationItem;
    const editedEducationList = structuredClone(currentResumeData.education);
    editedEducationList[index] = structuredClone(data);

    setCurrentResumeData({
      ...currentResumeData,
      education: editedEducationList,
    });
  }

  function handleExperienceSave(editedExperienceItem) {
    const { index, data } = editedExperienceItem;
    const editedExperienceList = structuredClone(currentResumeData.experience);
    editedExperienceList[index] = structuredClone(data);

    setCurrentResumeData({
      ...currentResumeData,
      experience: editedExperienceList,
    });
  }

  function handleGeneralInfoDeleteData() {
    setCurrentResumeData({
      ...currentResumeData,
      generalInfo: {
        fullName: "",
        phoneNumber: "",
        email: "",
      },
    });
  }

  function handleEducationItemDeleteData(itemIndexToDelete) {
    let modifiedEducationList = structuredClone(
      currentResumeData.education
    ).filter((educationItem, index) => itemIndexToDelete !== index);

    setCurrentResumeData({
      ...currentResumeData,
      education: modifiedEducationList,
    });
  }

  return (
    <main style={{ display: "flex" }}>
      <EditSection
        dataEditMode={dataEditMode}
        currentResumeData={currentResumeData}
        educationItemIndexToEdit={educationItemIndexToEdit}
        experienceItemIndexToEdit={experienceItemIndexToEdit}
        onGeneralInfoEditModeReset={handleGeneralInfoEditModeReset}
        onEducationEditModeReset={handleEducationEditModeReset}
        onExperienceEditModeReset={handleExperienceEditModeReset}
        onEducationSetEditMode={handleEducationSetEditMode}
        onExperienceSetEditMode={handleExperienceSetEditMode}
        onGeneralInfoSave={handleGeneralInfoSave}
        onEducationSave={handleEducationSave}
        onExperienceSave={handleExperienceSave}
      />
      <DisplaySection
        dataEditMode={dataEditMode}
        currentResumeData={currentResumeData}
        onGeneralInfoSetEditMode={handleGeneralInfoSetEditMode}
        onEducationSetEditMode={handleEducationSetEditMode}
        onExperienceSetEditMode={handleExperienceSetEditMode}
        onChangeEducationItemToEdit={handleChangeEducationItemToEdit}
        onChangeExperienceItemToEdit={handleChangeExperienceItemToEdit}
        onDeleteGeneralInfoData={handleGeneralInfoDeleteData}
        onDeleteEducationItem={handleEducationItemDeleteData}
      />
    </main>
  );
}

export default MainSection;
