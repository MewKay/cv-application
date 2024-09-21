function Education() {
  const inputClassName = "education-input";
  const schoolNameInputId = "school-name-input";
  const studyTitleInputId = "study-title-input";
  const endDateInputId = "end-date-input";
  const endDateMonthInputId = "end-date-month-input";
  const endDateYearInputId = "end-date-year-input";
  const endDateSelectClass = "end-date-select";

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = (() => {
    const centuryList = [];
    let todayYear = new Date().getFullYear();

    for (let i = 0; i < 100; i += 1, todayYear -= 1) {
      centuryList.push(todayYear);
    }

    return centuryList;
  })();

  return (
    <section id="education-section">
      <h2>Add Education</h2>

      <div className={inputClassName}>
        <label htmlFor={schoolNameInputId}>School Name :</label>
        <input id={schoolNameInputId} type="text" required></input>
      </div>

      <div className={inputClassName}>
        <label htmlFor={studyTitleInputId}>Title of Study :</label>
        <input id={studyTitleInputId} type="text" required></input>
      </div>

      <div className={inputClassName}>
        <label htmlFor={endDateInputId}>Completion By :</label>
        <div id={endDateInputId}>
          <span className={endDateSelectClass}>
            <label htmlFor={endDateMonthInputId}>Month :</label>
            <select
              id={endDateMonthInputId}
              name="completionMonth"
              defaultValue={months[0]}
            >
              {months.map((month) => {
                return (
                  <option value={month} key={crypto.randomUUID()}>
                    {month}
                  </option>
                );
              })}
            </select>
          </span>

          <span className={endDateSelectClass}>
            <label htmlFor={endDateYearInputId}>Year :</label>
            <select
              id={endDateYearInputId}
              name="completionYear"
              defaultValue={years[0]}
            >
              {years.map((year) => {
                return (
                  <option value={year} key={crypto.randomUUID()}>
                    {year}
                  </option>
                );
              })}
            </select>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Education;
