import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

type AddMemoryFormProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

type Inputs = {
  title: string;
  description: string;
  image: string;
  link: string;
};

function AddMemoryForm(props: AddMemoryFormProps) {
  const { register, handleSubmit } = useForm<Inputs>();
  const { isOpen, setIsOpen } = props;

  function onSubmit(data: Inputs) {
    const url = new URL(window.location.href);
    url.searchParams.set("memory", JSON.stringify(data));
    window.history.pushState({}, "", url);
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>New Scrapbook Memory</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add a memory to your scrapbook. Preferably raccoon-related.
        </DialogContentText>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            fullWidth
            id="title"
            label="Title"
            variant="standard"
            defaultValue={"Baby Raccoon"}
            {...register("title")}
            autoFocus
          />
          <TextField
            fullWidth
            id="description"
            label="Description"
            variant="standard"
            defaultValue={"A baby raccoon I saw at the park"}
            {...register("description")}
          />
          <TextField
            fullWidth
            id="image"
            label="Image URL"
            variant="standard"
            defaultValue={
              "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            }
            {...register("image")}
          />
          <TextField
            fullWidth
            id="link"
            label="Link"
            variant="standard"
            {...register("link")}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          variant="contained"
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddMemoryForm;
