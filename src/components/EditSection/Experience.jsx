import { useState } from "react";
import MonthSelector from "./MonthSelector";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";
import Button from "../Button";

function CompanyNameInput({
  className,
  inputId,
  editMode,
  companyNameData,
  handleCompanyNameChange,
}) {
  return (
    <div className={className}>
      <label htmlFor={inputId} disabled={!editMode}>
        Company Name<span className="required">*</span> :
      </label>
      <input
        id={inputId}
        type="text"
        value={editMode ? companyNameData : ""}
        onChange={handleCompanyNameChange}
        required
        disabled={!editMode}
      />
    </div>
  );
}

function PositionTitleInput({
  className,
  inputId,
  editMode,
  positionTitleData,
  handlePositionTitleChange,
}) {
  return (
    <div className={className}>
      <label htmlFor={inputId} disabled={!editMode}>
        Position Title<span className="required">*</span> :
      </label>
      <input
        id={inputId}
        type="text"
        value={editMode ? positionTitleData : ""}
        onChange={handlePositionTitleChange}
        required
        disabled={!editMode}
      />
    </div>
  );
}

function WorkDurationInput({
  className,
  workDurationSelectClass,
  workStartNamePartId,
  workEndNamePartId,
  editMode,
  monthWorkStartData,
  yearWorkStartData,
  monthWorkEndData,
  yearWorkEndData,
  onMonthWorkStartChange,
  onYearWorkStartChange,
  onMonthWorkEndChange,
  onYearWorkEndChange,
}) {
  return (
    <fieldset className={className} disabled={!editMode}>
      <legend disabled={!editMode}>
        Work Duration<span className="required">*</span> :
      </legend>

      <div id="work-start-select">
        <label>From :</label>
        <MonthSelector
          className={workDurationSelectClass}
          namePartId={workStartNamePartId}
          monthValue={editMode && monthWorkStartData}
          yearValue={editMode && yearWorkStartData}
          onMonthChange={onMonthWorkStartChange}
          onYearChange={onYearWorkStartChange}
        />
      </div>

      <div id="work-end-select">
        <label>To :</label>
        <MonthSelector
          className={workDurationSelectClass}
          namePartId={workEndNamePartId}
          monthValue={editMode && monthWorkEndData}
          yearValue={editMode && yearWorkEndData}
          onMonthChange={onMonthWorkEndChange}
          onYearChange={onYearWorkEndChange}
        />
      </div>
    </fieldset>
  );
}

function TextInputItem({
  mainRespData,
  onBulletPointChange,
  onDeletionBulletPoint,
}) {
  return (
    <li>
      <input
        type="text"
        minLength={8}
        required
        value={mainRespData.bulletPointData}
        onChange={onBulletPointChange}
      ></input>
      <button
        className={"bullet-point-delete-button"}
        onClick={() => onDeletionBulletPoint(mainRespData.bulletPointKey)}
      >
        x
      </button>
    </li>
  );
}

function MainRespAdder({
  className,
  editMode,
  onSetEditMode,
  mainRespDataList,
  onBulletPointChange,
  onAdditionBulletPoint,
  onDeletionBulletPoint,
}) {
  return (
    <fieldset className={className} disabled={!editMode}>
      <legend disabled={!editMode}>Main Responsibilities :</legend>
      <ul>
        {editMode &&
          mainRespDataList.map((mainRespData, index) => {
            return (
              <TextInputItem
                key={mainRespData.bulletPointKey}
                mainRespData={mainRespData}
                onBulletPointChange={(e) => onBulletPointChange(e, index)}
                onDeletionBulletPoint={onDeletionBulletPoint}
              />
            );
          })}
        <li>
          <Button
            className={"add-bullet-button"}
            handleClick={onAdditionBulletPoint}
            buttonText={"Add more"}
            type={"button"}
          />
        </li>
      </ul>
    </fieldset>
  );
}

function Experience({
  editMode,
  onEditModeReset,
  onSetEditMode,
  currentExperienceData,
  itemIndexToEdit,
  onDataSave,
}) {
  const [toBeEditedExperience, setToBeEditedExperience] = useState({
    index: itemIndexToEdit,
    data: structuredClone(currentExperienceData[itemIndexToEdit]),
  });
  const [addMode, setAddMode] = useState(false);
  const [previousExperienceItem, setPreviousExperienceItem] = useState(
    currentExperienceData[itemIndexToEdit]
  );

  if (
    previousExperienceItem !== currentExperienceData[itemIndexToEdit] &&
    !addMode
  ) {
    setToBeEditedExperience({
      index: itemIndexToEdit,
      data: structuredClone(currentExperienceData[itemIndexToEdit]),
    });
    setPreviousExperienceItem(currentExperienceData[itemIndexToEdit]);
  }

  const inputClassName = "experience-input";
  const companyNameInputId = "company-name-input";
  const positionTitleInputId = "position-title-input";
  const workDurationSelectClass = "work-duration-select-class";
  const workStartNamePartId = "work-start";
  const workEndNamePartId = "work-end";

  const defaultDataValue = {
    companyName: "",
    positionTitle: "",
    workStart: `January ${new Date().getFullYear()}`,
    workEnd: `January ${new Date().getFullYear()}`,
    mainResp: [],
  };
  const { data = defaultDataValue } = toBeEditedExperience;
  const companyNameData = data.companyName;
  const positionTitleData = data.positionTitle;

  const workStartDateData = data.workStart.split(" ");
  const monthWorkStartData = workStartDateData[0];
  const yearWorkStartData = workStartDateData[1];

  const workEndDateData = data.workEnd.split(" ");
  const monthWorkEndData = workEndDateData[0];
  const yearWorkEndData = workEndDateData[1];

  const mainRespDataList = data.mainResp;

  function handleCompanyNameChange(e) {
    const { index, data } = toBeEditedExperience;
    data.companyName = e.target.value;

    setToBeEditedExperience({
      index,
      data,
    });
  }

  function handlePositionTitleChange(e) {
    const { index, data } = toBeEditedExperience;
    data.positionTitle = e.target.value;

    setToBeEditedExperience({
      index,
      data,
    });
  }

  function handleWorkStartMonthChange(e) {
    const { index, data } = toBeEditedExperience;
    data.workStart = `${e.target.value} ${yearWorkStartData}`;

    setToBeEditedExperience({
      index,
      data,
    });
  }

  function handleWorkStartYearChange(e) {
    const { index, data } = toBeEditedExperience;
    data.workStart = `${monthWorkStartData} ${e.target.value}`;

    setToBeEditedExperience({
      index,
      data,
    });
  }

  function handleWorkEndMonthChange(e) {
    const { index, data } = toBeEditedExperience;
    data.workEnd = `${e.target.value} ${yearWorkEndData}`;

    setToBeEditedExperience({
      index,
      data,
    });
  }

  function handleWorkEndYearChange(e) {
    const { index, data } = toBeEditedExperience;
    data.workEnd = `${monthWorkEndData} ${e.target.value}`;

    setToBeEditedExperience({
      index,
      data,
    });
  }

  function handleBulletPointChange(e, bulletPointIndex) {
    const { index, data } = toBeEditedExperience;
    const modifiedMainResp = structuredClone(data.mainResp);
    modifiedMainResp[bulletPointIndex]["bulletPointData"] = e.target.value;
    data.mainResp = modifiedMainResp;

    setToBeEditedExperience({
      index,
      data,
    });
  }

  function handleAdditionBulletPoint() {
    const { index, data } = toBeEditedExperience;
    const modifiedMainResp = structuredClone(data.mainResp);
    modifiedMainResp.push({
      bulletPointKey: crypto.randomUUID(),
      bulletPointData: "",
    });
    data.mainResp = modifiedMainResp;

    setToBeEditedExperience({
      index,
      data,
    });
  }

  function handleDeletionBulletPoint(bulletPointKeyToDelete) {
    const { index, data } = toBeEditedExperience;
    const modifiedMainResp = data.mainResp.filter(
      (mainRespData) => mainRespData.bulletPointKey !== bulletPointKeyToDelete
    );
    data.mainResp = modifiedMainResp;

    setToBeEditedExperience({
      index,
      data,
    });
  }

  function handleAddItem() {
    setAddMode(true);
    onSetEditMode();
    setToBeEditedExperience({
      index: currentExperienceData.length,
      data: {
        companyName: "",
        positionTitle: "",
        workStart: `January ${new Date().getFullYear()}`,
        workEnd: `January ${new Date().getFullYear()}`,
        mainResp: [],
      },
    });
  }

  function handleExperienceReset() {
    setToBeEditedExperience({
      index: itemIndexToEdit,
      data: structuredClone(currentExperienceData[itemIndexToEdit]),
    });
    onEditModeReset();
    setAddMode(false);
  }

  function handleSave(e) {
    e.preventDefault();
    onDataSave(toBeEditedExperience);
    onEditModeReset();
    setAddMode(false);
  }

  return (
    <section id="experience-section">
      <form onSubmit={handleSave}>
        <div className="section-title">
          <h2>Add Experience</h2>
          <Button
            className={"add-item"}
            buttonText={"+"}
            type={"button"}
            disabled={editMode}
            handleClick={handleAddItem}
          />
        </div>
        <CompanyNameInput
          className={inputClassName}
          inputId={companyNameInputId}
          editMode={editMode}
          companyNameData={companyNameData}
          handleCompanyNameChange={handleCompanyNameChange}
        />
        <PositionTitleInput
          className={inputClassName}
          inputId={positionTitleInputId}
          editMode={editMode}
          positionTitleData={positionTitleData}
          handlePositionTitleChange={handlePositionTitleChange}
        />
        <WorkDurationInput
          className={inputClassName}
          workDurationSelectClass={workDurationSelectClass}
          workStartNamePartId={workStartNamePartId}
          workEndNamePartId={workEndNamePartId}
          editMode={editMode}
          monthWorkStartData={monthWorkStartData}
          yearWorkStartData={yearWorkStartData}
          monthWorkEndData={monthWorkEndData}
          yearWorkEndData={yearWorkEndData}
          onMonthWorkStartChange={handleWorkStartMonthChange}
          onYearWorkStartChange={handleWorkStartYearChange}
          onMonthWorkEndChange={handleWorkEndMonthChange}
          onYearWorkEndChange={handleWorkEndYearChange}
        />
        <MainRespAdder
          className={inputClassName}
          editMode={editMode}
          mainRespDataList={mainRespDataList}
          onBulletPointChange={handleBulletPointChange}
          onAdditionBulletPoint={handleAdditionBulletPoint}
          onDeletionBulletPoint={handleDeletionBulletPoint}
        />
        <div className={`button-section ${!editMode ? "hidden" : ""}`}>
          <SaveButton />
          <CancelButton handleClick={handleExperienceReset} />
        </div>
      </form>
    </section>
  );
}

export default Experience;
