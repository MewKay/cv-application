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

  return (
    <main>
      <EditSection dataEditMode={dataEditMode} />
      <DisplaySection
        onGeneralInfoSetEditMode={handleGeneralInfoSetEditMode}
        onEducationSetEditMode={handleEducationSetEditMode}
        onExperienceSetEditMode={handleExperienceSetEditMode}
      />
    </main>
  );
}

export default MainSection;
