import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";
import { useState } from "react";

function FullNameInput({
  className,
  inputId,
  editMode,
  fullNameData,
  handleFullNameChange,
}) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>Full Name :</label>
      <input
        id={inputId}
        type="text"
        value={editMode ? fullNameData : ""}
        onChange={handleFullNameChange}
        required
        disabled={!editMode}
      />
    </div>
  );
}

function EmailInput({
  className,
  inputId,
  editMode,
  emailData,
  handleEmailChange,
}) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>Email :</label>
      <input
        id={inputId}
        type="email"
        value={editMode ? emailData : ""}
        onChange={handleEmailChange}
        required
        disabled={!editMode}
      />
    </div>
  );
}

function PhoneNumberInput({
  className,
  inputId,
  editMode,
  phoneNumberData,
  handlePhoneNumberChange,
}) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>Phone Number :</label>
      <input
        id={inputId}
        type="tel"
        value={editMode ? phoneNumberData : ""}
        onChange={handlePhoneNumberChange}
        disabled={!editMode}
      />
    </div>
  );
}

function GeneralInfo({ editMode, currentGeneralInfoData, onEditModeReset }) {
  const [toBeEditedGeneralInfo, setToBeEditedGeneralInfo] = useState(
    currentGeneralInfoData
  );

  const inputClassName = "general-info-input";
  const fullNameInputId = "full-name-input";
  const emailInputId = "email-input";
  const phoneNumberInputId = "phone-number-input";

  const fullNameData = toBeEditedGeneralInfo.fullName;
  const phoneNumberData = toBeEditedGeneralInfo.phoneNumber;
  const emailData = toBeEditedGeneralInfo.email;

  function handleFullNameChange(e) {
    setToBeEditedGeneralInfo({
      ...toBeEditedGeneralInfo,
      fullName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setToBeEditedGeneralInfo({
      ...toBeEditedGeneralInfo,
      email: e.target.value,
    });
  }

  function handlePhoneNumberChange(e) {
    setToBeEditedGeneralInfo({
      ...toBeEditedGeneralInfo,
      phoneNumber: e.target.value,
    });
  }

  function handleGeneralInfoReset() {
    setToBeEditedGeneralInfo(currentGeneralInfoData);
    onEditModeReset();
  }

  return (
    <section id="general-info-section">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>General Informations</h2>
        <FullNameInput
          className={inputClassName}
          inputId={fullNameInputId}
          editMode={editMode}
          fullNameData={fullNameData}
          handleFullNameChange={handleFullNameChange}
        />
        <EmailInput
          className={inputClassName}
          inputId={emailInputId}
          editMode={editMode}
          emailData={emailData}
          handleEmailChange={handleEmailChange}
        />
        <PhoneNumberInput
          className={inputClassName}
          inputId={phoneNumberInputId}
          editMode={editMode}
          phoneNumberData={phoneNumberData}
          handlePhoneNumberChange={handlePhoneNumberChange}
        />

        <div
          className="button-section"
          style={{ display: editMode ? "block" : "none" }}
        >
          <SaveButton />
          <CancelButton handleClick={handleGeneralInfoReset} />
        </div>
      </form>
    </section>
  );
}

export default GeneralInfo;
