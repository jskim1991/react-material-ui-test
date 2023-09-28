import { Button } from "@mui/material";

const MuiSimpleButton = ({ onClick }) => {
  return (
    <Button variant="outlined" color="success" onClick={onClick}>
      Click Here
    </Button>
  );
};

export default MuiSimpleButton;
