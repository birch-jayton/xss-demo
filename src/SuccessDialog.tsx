import {
  Alert,
  AlertTitle,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { MemoryCardProps } from "./MemoryCard.tsx";

function clearPreviewMemory() {
  const url = new URL(window.location.href);
  url.searchParams.delete("memory");
  window.history.pushState({}, "", url);
}

const obfuscatedTitle = "U3VjY2VzcyEhISBYU1MgaXMgYmVpbmcgcmVmbGVjdGVkISE=";
const obfuscatedFlagTitle = "VGhlIEZsYWc=";
const obfuscatedFlag = "Um9ja2V0IFJhY2Nvb24=";
const obfuscatedDescription =
  "LSBpcyB0aGUgZmxhZy4gTm90aGluZyB5b3UgY2FuIGRvIHdpdGggaXQuLi4geW91IGNhbiB0ZWxsIEpheXRvbiB5b3UgZm91bmQgaXQgb3Igc29tZXRoaW5nIGlkay4=";

function SuccessDialog({
  isOpen,
  setIsOpen,
  previewMemory,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  previewMemory: MemoryCardProps;
}) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>{atob(obfuscatedTitle)}</DialogTitle>
      <DialogContent>
        <Alert severity="success">
          <AlertTitle>{atob(obfuscatedFlagTitle)}</AlertTitle>
          <strong>{atob(obfuscatedFlag)}</strong> {atob(obfuscatedDescription)}
        </Alert>
        <DialogContentText sx={{ mt: 3 }}>
          You have added the XSS payload{" "}
          <span style={{ fontWeight: "bold" }}>"{previewMemory.link}" </span>{" "}
          that reflects in the anchor tag.
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/ieBWQkIVEELhbizGAp" width="100%" height="100%" style="position:absolute" class="giphy-embed" allowFullScreen></iframe></div>',
            }}
          />
          <br />
          <br />
          <Typography variant={"h5"}>Conclusion:</Typography>
          <Typography>
            XSS can be reflected and *shared* with a victim without it ever
            being processed by a webserver or saved to a database. Just as you
            demonstrated, you can share a link with a victim that contains a
            payload that is never process by the app.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            clearPreviewMemory();
            setIsOpen(false);
          }}
          type="submit"
          variant="contained"
        >
          Done!
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SuccessDialog;
