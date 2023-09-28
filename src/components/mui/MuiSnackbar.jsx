import { useState } from "react";
import { Button, Snackbar } from "@mui/material";

const MuiSnackbar = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleShowSnackbar = () => {
    setShowSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleShowSnackbar}>
        Show Snackbar
      </Button>
      {showSnackbar && (
        <Snackbar
          open={showSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
          message="Hello there"
        />
      )}
    </div>
  );
};

export default MuiSnackbar;
