import LogIn from "../LogIn";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <Button onClick={onClose} sx={{ minWidth: "40px" }}>
            <CloseIcon />
          </Button>
        </DialogActions>
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            paddingTop: "0px",
            fontFamily: "Jost, sans-serif",
            textAlign: "center",
          }}
        >
          {"Please, sign in to make changes."}
        </DialogTitle>
        <DialogActions sx={{ justifyContent: "center", paddingBottom: "24px" }}>
          <LogIn onClose={onClose} />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Modal;
