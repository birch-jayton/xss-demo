import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export type MemoryCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

function MemoryCard(props: MemoryCardProps) {
  const { title, description, image, link } = props;

  return (
    <Card>
      <CardMedia sx={{ minHeight: 240 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link}>
          See More
        </Button>
      </CardActions>
    </Card>
  );
}

export default MemoryCard;
