import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";

function FullNameInput({ className, inputId }) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>Full Name :</label>
      <input id={inputId} type="text" required />
    </div>
  );
}

function EmailInput({ className, inputId }) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>Email :</label>
      <input id={inputId} type="email" required />
    </div>
  );
}

function PhoneNumberInput({ className, inputId }) {
  return (
    <div className={className}>
      <label htmlFor={inputId}>Phone Number :</label>
      <input id={inputId} type="tel" />
    </div>
  );
}

function GeneralInfo() {
  const inputClassName = "general-info-input";
  const fullNameInputId = "full-name-input";
  const emailInputId = "email-input";
  const phoneNumberInputId = "phone-number-input";

  return (
    <section id="general-info-section">
      <form>
        <h2>General Informations</h2>
        <FullNameInput className={inputClassName} inputId={fullNameInputId} />
        <EmailInput className={inputClassName} inputId={emailInputId} />
        <PhoneNumberInput
          className={inputClassName}
          inputId={phoneNumberInputId}
        />

        <div className="button-section">
          <SaveButton />
          <CancelButton />
        </div>
      </form>
    </section>
  );
}

export default GeneralInfo;
