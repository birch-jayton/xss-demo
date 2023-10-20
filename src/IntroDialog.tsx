import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

function IntroDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>React.js XSS Capture the flag</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Try to get an XSS payload to be reflected in the app.
          <br />
          <br />
          <Typography>- Reflect a XSS payload </Typography>
          <Typography>
            - editing of HTML or executing javascript in the console is CHEATING{" "}
            {String.fromCodePoint(Number("0x1F621"))}
          </Typography>
          <br />
          <br />
          <Typography>Good Luck!</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => setIsOpen(false)}
          type="submit"
          variant="contained"
        >
          Got it!
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default IntroDialog;
