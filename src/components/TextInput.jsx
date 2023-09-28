import { useState } from "react";

const TextInput = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h3>Default</h3>
      <label htmlFor="name-input">Name</label>
      <input
        data-testid="name-input"
        id="name-input"
        type="text"
        placeholder="Enter name"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;
