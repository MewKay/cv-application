import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";

function FullNameInput({ className, inputId, editMode }) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>Full Name :</label>
      <input id={inputId} type="text" required disabled={!editMode} />
    </div>
  );
}

function EmailInput({ className, inputId, editMode }) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>Email :</label>
      <input id={inputId} type="email" required disabled={!editMode} />
    </div>
  );
}

function PhoneNumberInput({ className, inputId, editMode }) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>Phone Number :</label>
      <input id={inputId} type="tel" disabled={!editMode} />
    </div>
  );
}

function GeneralInfo({ editMode }) {
  const inputClassName = "general-info-input";
  const fullNameInputId = "full-name-input";
  const emailInputId = "email-input";
  const phoneNumberInputId = "phone-number-input";

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
        />
        <EmailInput
          className={inputClassName}
          inputId={emailInputId}
          editMode={editMode}
        />
        <PhoneNumberInput
          className={inputClassName}
          inputId={phoneNumberInputId}
          editMode={editMode}
        />

        <div
          className="button-section"
          style={{ display: editMode ? "block" : "none" }}
        >
          <SaveButton />
          <CancelButton />
        </div>
      </form>
    </section>
  );
}

export default GeneralInfo;
