import { useState } from "react";
import CancelButton from "./CancelButton";
import MonthSelector from "./MonthSelector";
import SaveButton from "./SaveButton";
import Button from "../Button";

function SchoolNameInput({
  className,
  inputId,
  editMode,
  schoolNameData,
  handleSchoolNameChange,
}) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>School Name :</label>
      <input
        id={inputId}
        type="text"
        value={editMode ? schoolNameData : ""}
        onChange={handleSchoolNameChange}
        required
        disabled={!editMode}
      />
    </div>
  );
}

function StudyTitleInput({
  className,
  inputId,
  editMode,
  studyTitleData,
  handleStudyTitleChange,
}) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>Title of Study :</label>
      <input
        id={inputId}
        type="text"
        value={editMode ? studyTitleData : ""}
        onChange={handleStudyTitleChange}
        required
        disabled={!editMode}
      />
    </div>
  );
}

function EducationEndDateInput({
  className,
  inputId,
  namePartId,
  editMode,
  monthEndDateData,
  yearEndDateData,
  onMonthChange,
  onYearChange,
}) {
  return (
    <fieldset className={className} disabled={!editMode}>
      <legend>Completion By :</legend>
      <MonthSelector
        id={inputId}
        namePartId={namePartId}
        monthValue={editMode && monthEndDateData}
        yearValue={editMode && yearEndDateData}
        onMonthChange={onMonthChange}
        onYearChange={onYearChange}
      />
    </fieldset>
  );
}

function Education({
  editMode,
  onEditModeReset,
  onSetEditMode,
  currentEducationData,
  itemIndexToEdit,
  onDataSave,
}) {
  const [toBeEditedEducation, setToBeEditedEducation] = useState({
    index: itemIndexToEdit,
    data: structuredClone(currentEducationData[itemIndexToEdit]),
  });
  const [addMode, setAddMode] = useState(false);
  const [previousEducationItem, setPreviousEducationItem] = useState(
    currentEducationData[itemIndexToEdit]
  );

  if (
    previousEducationItem !== currentEducationData[itemIndexToEdit] &&
    !addMode
  ) {
    setToBeEditedEducation({
      index: itemIndexToEdit,
      data: structuredClone(currentEducationData[itemIndexToEdit]),
    });
    setPreviousEducationItem(currentEducationData[itemIndexToEdit]);
  }

  const inputClassName = "education-input";
  const schoolNameInputId = "school-name-input";
  const studyTitleInputId = "study-title-input";
  const educationEndDateInputId = "education-end-date-input";
  const namePartId = "education-end-date";

  const defaultDataValue = {
    schoolName: "",
    studyTitle: "",
    endDate: `January ${new Date().getFullYear()}`,
  };
  const { data = defaultDataValue } = toBeEditedEducation;
  const schoolNameData = data.schoolName;
  const studyTitleData = data.studyTitle;
  const endDateData = data.endDate.split(" ");
  const monthEndDateData = endDateData[0];
  const yearEndDateData = endDateData[1];

  function handleSchoolNameChange(e) {
    const { index, data } = toBeEditedEducation;
    data.schoolName = e.target.value;

    setToBeEditedEducation({
      index,
      data,
    });
  }

  function handleStudyTitleChange(e) {
    const { index, data } = toBeEditedEducation;
    data.studyTitle = e.target.value;

    setToBeEditedEducation({
      index,
      data,
    });
  }

  function handleEndDateMonthChange(e) {
    const { index, data } = toBeEditedEducation;
    data.endDate = `${e.target.value} ${yearEndDateData}`;

    setToBeEditedEducation({
      index,
      data,
    });
  }

  function handleEndDateYearChange(e) {
    const { index, data } = toBeEditedEducation;
    data.endDate = `${monthEndDateData} ${e.target.value}`;

    setToBeEditedEducation({
      index,
      data,
    });
  }

  function handleAddItem() {
    setAddMode(true);
    onSetEditMode();
    setToBeEditedEducation({
      index: currentEducationData.length,
      data: {
        schoolName: "",
        studyTitle: "",
        endDate: `January ${new Date().getFullYear()}`,
      },
    });
  }

  function handleEducationReset() {
    setToBeEditedEducation({
      index: itemIndexToEdit,
      data: structuredClone(currentEducationData[itemIndexToEdit]),
    });
    onEditModeReset();
    setAddMode(false);
  }

  function handleSave(e) {
    e.preventDefault();
    onDataSave(toBeEditedEducation);
    onEditModeReset();
    setAddMode(false);
  }

  return (
    <section id="education-section">
      <form onSubmit={handleSave}>
        <div>
          <h2>Add Education</h2>
          <Button
            className={"add-item"}
            buttonText={"+"}
            type={"button"}
            disabled={editMode}
            handleClick={handleAddItem}
          />
        </div>

        <SchoolNameInput
          className={inputClassName}
          inputId={schoolNameInputId}
          editMode={editMode}
          schoolNameData={schoolNameData}
          handleSchoolNameChange={handleSchoolNameChange}
        />
        <StudyTitleInput
          className={inputClassName}
          inputId={studyTitleInputId}
          editMode={editMode}
          studyTitleData={studyTitleData}
          handleStudyTitleChange={handleStudyTitleChange}
        />
        <EducationEndDateInput
          className={inputClassName}
          inputId={educationEndDateInputId}
          namePartId={namePartId}
          editMode={editMode}
          monthEndDateData={monthEndDateData}
          yearEndDateData={yearEndDateData}
          onMonthChange={handleEndDateMonthChange}
          onYearChange={handleEndDateYearChange}
        />

        <div
          className="button-section"
          style={{ display: editMode ? "block" : "none" }}
        >
          <SaveButton />
          <CancelButton handleClick={handleEducationReset} />
        </div>
      </form>
    </section>
  );
}

export default Education;
