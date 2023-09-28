import { TextField } from "@mui/material";
import { useState } from "react";

const MuiTextInput = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h3>mui TextField</h3>
      <TextField
        inputProps={{ "data-testid": "name-input" }}
        label="Name"
        variant="outlined"
        placeholder="Enter name"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

export default MuiTextInput;
