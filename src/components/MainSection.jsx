import EditSection from "./EditSection";
import DisplaySection from "./DisplaySection";
import { useState } from "react";
import resumeData from "../resumeData";

function MainSection() {
  const [currentResumeData, setCurrentResumeData] = useState(resumeData);
  const [dataEditMode, setDataEditMode] = useState({
    generalInfo: false,
    education: false,
    experience: false,
  });
  const [educationItemIndexToEdit, setEducationItemIndexToEdit] = useState(0);

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
    setDataEditMode({ ...dataEditMode, experience: true });
  }

  function handleChangeEducationItemToEdit(index) {
    setEducationItemIndexToEdit(index);
  }

  function handleGeneralInfoSave(editedGeneralInfo) {
    setCurrentResumeData({
      ...currentResumeData,
      generalInfo: editedGeneralInfo,
    });
  }

  function handleEducationSave(editedEducationItem) {
    const { index, data } = editedEducationItem;
    const editedEducationList = [...currentResumeData.education];
    editedEducationList[index] = data;

    setCurrentResumeData({
      ...currentResumeData,
      education: editedEducationList,
    });
  }

  return (
    <main>
      <EditSection
        dataEditMode={dataEditMode}
        educationItemIndexToEdit={educationItemIndexToEdit}
        currentResumeData={currentResumeData}
        onGeneralInfoEditModeReset={handleGeneralInfoEditModeReset}
        onGeneralInfoSave={handleGeneralInfoSave}
        onEducationEditModeReset={handleEducationEditModeReset}
        onExperienceEditModeReset={handleExperienceEditModeReset}
        onEducationSave={handleEducationSave}
      />
      <DisplaySection
        dataEditMode={dataEditMode}
        onGeneralInfoSetEditMode={handleGeneralInfoSetEditMode}
        onEducationSetEditMode={handleEducationSetEditMode}
        onExperienceSetEditMode={handleExperienceSetEditMode}
        onChangeEducationItemToEdit={handleChangeEducationItemToEdit}
      />
    </main>
  );
}

export default MainSection;
