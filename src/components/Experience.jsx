import { useState } from "react";
import MonthSelector from "./MonthSelector";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";

function CompanyNameInput({ className, inputId }) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>Company Name :</label>
      <input id={inputId} type="text" required></input>
    </div>
  );
}

function PositionTitleInput({ className, inputId }) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>Position Title :</label>
      <input id={inputId} type="text" required></input>
    </div>
  );
}

function WorkDurationInput({
  className,
  workDurationSelectClass,
  workStartNamePartId,
  workEndNamePartId,
}) {
  return (
    <fieldset className={className}>
      <legend>Work Duration :</legend>

      <div id="work-start-select">
        <label>From :</label>
        <MonthSelector
          className={workDurationSelectClass}
          namePartId={workStartNamePartId}
        />
      </div>

      <div id="work-end-select">
        <label>To :</label>
        <MonthSelector
          className={workDurationSelectClass}
          namePartId={workEndNamePartId}
        />
      </div>
    </fieldset>
  );
}

function TextInputItem() {
  return (
    <li>
      <input type="text"></input>
    </li>
  );
}

function MainRespAdder({ className }) {
  const [listTextInput, setListTextInput] = useState([
    <TextInputItem key={crypto.randomUUID()} />,
  ]);

  function handleButtonClick() {
    setListTextInput([
      ...listTextInput,
      <TextInputItem key={crypto.randomUUID()} />,
    ]);
  }

  return (
    <fieldset className={className}>
      <legend>Main Responsibilities :</legend>
      <ul>
        {listTextInput}
        <li>
          <button onClick={handleButtonClick}>Add more</button>
        </li>
      </ul>
    </fieldset>
  );
}

function Experience() {
  const inputClassName = "experience-input";
  const companyNameInputId = "company-name-input";
  const positionTitleInputId = "position-title-input";
  const workDurationSelectClass = "work-duration-select-class";
  const workStartNamePartId = "work-start";
  const workEndNamePartId = "work-end";

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>Add Experience</h2>
        <CompanyNameInput
          className={inputClassName}
          inputId={companyNameInputId}
        />
        <PositionTitleInput
          className={inputClassName}
          inputId={positionTitleInputId}
        />
        <WorkDurationInput
          className={inputClassName}
          workDurationSelectClass={workDurationSelectClass}
          workStartNamePartId={workStartNamePartId}
          workEndNamePartId={workEndNamePartId}
        />
        <MainRespAdder className={inputClassName} />
        <div className="button-section">
          <SaveButton />
          <CancelButton />
        </div>
      </form>
    </section>
  );
}

export default Experience;
