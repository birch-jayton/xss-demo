import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import MemoryCard, { MemoryCardProps } from "./MemoryCard.tsx";

type AddMemoryPreviewProps = {
  memory: MemoryCardProps | null;
  setMemories: (
    memories: (prevMems: Array<MemoryCardProps>) => MemoryCardProps[],
  ) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function clearPreviewMemory() {
  const url = new URL(window.location.href);
  url.searchParams.delete("memory");
  window.history.pushState({}, "", url);
}

function AddMemoryPreview(props: AddMemoryPreviewProps) {
  const { memory, setMemories, isOpen, setIsOpen } = props;

  function handleClose() {
    clearPreviewMemory();
    setIsOpen(false);
  }

  function handleSaveMemory() {
    if (!memory) return;
    /******************
   New scrapbook Memory is set here. Look out for that XSS!!!!
   Just pretend this gets sent off to a database ;)
   ******************/
    setMemories((prevMems) => [memory, ...prevMems]);
    /*********************/

    handleClose();
  }

  return (
    memory && (
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Preview</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add this memory to your scrapbook
          </DialogContentText>
          <MemoryCard {...memory} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSaveMemory} type="submit" variant="contained">
            Add Memory
          </Button>
        </DialogActions>
      </Dialog>
    )
  );
}

export default AddMemoryPreview;
