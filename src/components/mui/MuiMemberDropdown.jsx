import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const MuiMemberDropdown = () => {
  const members = [
    { id: 1, name: "Jay" },
    { id: 2, name: "Su" },
  ];

  const [name, setName] = useState("");

  return (
    <div>
      <h3>mui Select</h3>
      <FormControl
        fullWidth={true}
        sx={{
          width: "200px",
        }}
      >
        <InputLabel id="name-select-label">Select Member</InputLabel>
        <Select
          data-testid="name-select"
          labelId="name-select-label"
          id="name-select"
          label="Select Member"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        >
          {members.map((m) => {
            return (
              <MenuItem key={m.id} value={m.id}>
                {m.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default MuiMemberDropdown;
