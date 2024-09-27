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

  function handleGeneralInfoSave(editedGeneralInfo) {
    setCurrentResumeData({
      ...currentResumeData,
      generalInfo: editedGeneralInfo,
    });
  }

  return (
    <main>
      <EditSection
        dataEditMode={dataEditMode}
        currentResumeData={currentResumeData}
        onGeneralInfoSave={handleGeneralInfoSave}
        onGeneralInfoEditModeReset={handleGeneralInfoEditModeReset}
        onEducationEditModeReset={handleEducationEditModeReset}
        onExperienceEditModeReset={handleExperienceEditModeReset}
      />
      <DisplaySection
        onGeneralInfoSetEditMode={handleGeneralInfoSetEditMode}
        onEducationSetEditMode={handleEducationSetEditMode}
        onExperienceSetEditMode={handleExperienceSetEditMode}
      />
    </main>
  );
}

export default MainSection;
