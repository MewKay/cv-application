function GeneralInfo() {
  const inputClassName = "general-info-input";
  const fullNameInputId = "full-name-input";
  const emailInputId = "email-input";
  const phoneNumberInputId = "phone-number-input";

  return (
    <section id="general-info-section">
      <h2>General Informations</h2>

      <div className={inputClassName}>
        <label htmlFor={fullNameInputId}>Full Name :</label>
        <input id={fullNameInputId} type="text" required />
      </div>

      <div className={inputClassName}>
        <label htmlFor={emailInputId}>Email :</label>
        <input id={emailInputId} type="email" required />
      </div>

      <div className={inputClassName}>
        <label htmlFor={phoneNumberInputId}>Phone Number :</label>
        <input id={phoneNumberInputId} type="tel" />
      </div>
    </section>
  );
}

export default GeneralInfo;
