import { TextField } from "@mui/material";
import { useState } from "react";

const MuiTextArea = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h3>mui TextField as text area</h3>
      <TextField
        multiline={true}
        minRows={3}
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

export default MuiTextArea;
