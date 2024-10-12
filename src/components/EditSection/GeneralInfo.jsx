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
      <label htmlFor={inputId} disabled={!editMode}>
        Full Name<span className="required">*</span> :
      </label>
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
      <label htmlFor={inputId} disabled={!editMode}>
        Email<span className="required">*</span> :
      </label>
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
      <label htmlFor={inputId} disabled={!editMode}>
        Phone Number :
      </label>
      <input
        id={inputId}
        type="tel"
        value={editMode ? phoneNumberData : ""}
        onChange={handlePhoneNumberChange}
        disabled={!editMode}
        minLength={10}
      />
    </div>
  );
}

function GeneralInfo({
  editMode,
  currentGeneralInfoData,
  onEditModeReset,
  onDataSave,
}) {
  const [toBeEditedGeneralInfo, setToBeEditedGeneralInfo] = useState(
    currentGeneralInfoData
  );
  const [previousGeneralInfo, setPreviousGeneralInfo] = useState(
    currentGeneralInfoData
  );

  if (currentGeneralInfoData !== previousGeneralInfo) {
    setToBeEditedGeneralInfo(currentGeneralInfoData);
    setPreviousGeneralInfo(currentGeneralInfoData);
  }

  const inputClassName = "general-info-input";
  const fullNameInputId = "full-name-input";
  const emailInputId = "email-input";
  const phoneNumberInputId = "phone-number-input";

  const fullNameData = toBeEditedGeneralInfo.fullName;
  const phoneNumberData = toBeEditedGeneralInfo.phoneNumber;
  const emailData = toBeEditedGeneralInfo.email;

  const isFullNameBlank = currentGeneralInfoData.fullName.length <= 0;

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
    if (!isFullNameBlank) {
      onEditModeReset();
    }

    setToBeEditedGeneralInfo(currentGeneralInfoData);
  }

  function handleSave(e) {
    e.preventDefault();
    onDataSave(toBeEditedGeneralInfo);
    onEditModeReset();
  }

  return (
    <section id="general-info-section">
      <form onSubmit={handleSave}>
        <h2 className="section-title">General Informations</h2>
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

        <div className={`button-section ${!editMode ? "hidden" : ""}`}>
          <SaveButton />
          <CancelButton handleClick={handleGeneralInfoReset} />
        </div>
      </form>
    </section>
  );
}

export default GeneralInfo;
