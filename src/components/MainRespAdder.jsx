import { useState } from "react";

function TextInput() {
  return (
    <li>
      <input type="text"></input>
    </li>
  );
}

function MainRespAdder() {
  const [listTextInput, setListTextInput] = useState([
    <TextInput key={crypto.randomUUID()} />,
  ]);

  function handleButtonClick() {
    setListTextInput([
      ...listTextInput,
      <TextInput key={crypto.randomUUID()} />,
    ]);
  }

  return (
    <fieldset>
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

export default MainRespAdder;
