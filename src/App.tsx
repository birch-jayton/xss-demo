import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MemoryCard, { MemoryCardProps } from "./MemoryCard.tsx";
import React from "react";
import AddMemoryForm from "./AddMemoryForm.tsx";
import AddMemoryPreview from "./AddMemoryPreview.tsx";
import IntroDialog from "./IntroDialog.tsx";
import SuccessDialog from "./SuccessDialog.tsx";

const defaultMemories: Array<MemoryCardProps> = [
  {
    title: "My Raccoon eating pizza",
    description: "This is a raccoon eating pizza",
    image:
      "DALL·E 2023-10-09 15.40.39 - a photo Raccoon eating pizza at the kitchen table.png",
    link: "https://en.wikipedia.org/wiki/Raccoon",
  },
  {
    title: "My Raccoon washing my car",
    description: "This is a raccoon washing my car",
    image:
      "DALL·E 2023-10-09 15.42.00 - a photo of a raccoon washing a car.png",
    link: "https://en.wikipedia.org/wiki/Raccoon",
  },
  {
    title: "My raccoon baking a cake",
    description: "This is a raccoon baking a cake.",
    image:
      "DALL·E 2023-10-09 15.42.44 - a photo of a raccoon wearing a chef hat baking a cake.png",
    link: "https://en.wikipedia.org/wiki/Raccoon",
  },
  {
    title: "My raccoon playing poker",
    description: "He cannot stop. He has a gambling problem. He owes me $713",
    image:
      "DALL·E 2023-10-09 15.43.37 - a photo of a raccoon playing poker.png",
    link: "https://en.wikipedia.org/wiki/Raccoon",
  },
];

function previewContainsXSS(previewMemory: MemoryCardProps) {
  const { link } = previewMemory;
  return link.includes("javascript:");
}

function getPreviewMemory() {
  const urlParams = new URLSearchParams(window.location.search);
  const rawPreviewMemory = urlParams.get("memory");
  if (!rawPreviewMemory) {
    return null;
  }
  console.log({ rawPreviewMemory });
  return JSON.parse(rawPreviewMemory);
}

function App() {
  const [memories, setMemories] =
    React.useState<Array<MemoryCardProps>>(defaultMemories);
  const [isMemoryFormOpen, setIsMemoryFormOpen] = React.useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false);
  const [isIntroDialogOpen, setIsIntroDialogOpen] = React.useState(true);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = React.useState(false);

  const previewMemory = getPreviewMemory();

  if (
    previewMemory &&
    previewContainsXSS(previewMemory) &&
    !isSuccessDialogOpen
  ) {
    setIsSuccessDialogOpen(true);
  }

  if (previewMemory && !previewContainsXSS(previewMemory) && !isPreviewOpen) {
    setIsPreviewOpen(true);
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Scrapbook App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ mb: 2 }} component="h1" variant="h2">
            My Scrapbook
          </Typography>
          <Typography component="h2" variant="h6" sx={{ mb: 1 }}>
            Add memories to your scrapbook or whatever blah blah blah this is
            for xss testing
          </Typography>
          <Button
            onClick={() => setIsMemoryFormOpen(true)}
            variant={"contained"}
          >
            Add a memory
          </Button>
        </Box>
        <Grid sx={{ mt: 2 }} container spacing={2}>
          {memories.map((memory) => (
            <Grid xs={12} md={6}>
              <MemoryCard {...memory} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <AddMemoryForm
        isOpen={isMemoryFormOpen}
        setIsOpen={setIsMemoryFormOpen}
      />
      <AddMemoryPreview
        isOpen={isPreviewOpen}
        memory={previewMemory}
        setMemories={setMemories}
        setIsOpen={setIsPreviewOpen}
      />
      <IntroDialog
        isOpen={isIntroDialogOpen}
        setIsOpen={setIsIntroDialogOpen}
      />
      {previewMemory && (
        <SuccessDialog
          isOpen={isSuccessDialogOpen}
          setIsOpen={setIsSuccessDialogOpen}
          previewMemory={previewMemory}
        />
      )}
    </>
  );
}

export default App;
