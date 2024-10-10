import { useState } from "react";

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

function MonthSelector({
  namePartId,
  monthValue,
  yearValue,
  onMonthChange,
  onYearChange,
}) {
  const monthInputId = `${namePartId}-month-input`;
  const yearInputId = `${namePartId}-year-input`;

  return (
    <div>
      <span>
        <label htmlFor={monthInputId}>Month :</label>
        <select
          id={monthInputId}
          name="completionMonth"
          value={monthValue}
          onChange={onMonthChange}
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

      <span>
        <label htmlFor={yearInputId}>Year :</label>
        <select
          id={yearInputId}
          name="completionYear"
          value={yearValue}
          onChange={onYearChange}
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
  );
}

export default MonthSelector;
