import { useState } from "react";

const MemberDropdown = () => {
  const members = [
    { id: 1, name: "Jay" },
    { id: 2, name: "Su" },
  ];

  const [name, setName] = useState("");

  return (
    <div>
      <h3>Default</h3>
      <label htmlFor="name-select">Select Member</label>
      <select
        id="name-select"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      >
        <option value=""></option>
        {members.map((m) => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MemberDropdown;
