import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export const MuiModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleShowModal}>
        Show Modal
      </Button>
      {showModal && (
        <Dialog open={showModal} fullWidth={true}>
          <DialogTitle>Welcome</DialogTitle>
          <DialogContent>Hi there</DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default MuiModal;
