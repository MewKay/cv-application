import EditSection from "./EditSection";
import DisplaySection from "./DisplaySection";
import { useState } from "react";

function MainSection() {
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

  return (
    <main>
      <EditSection
        dataEditMode={dataEditMode}
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
