import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./productcard.css"; 

export const ProductCard = ({ title, description, price, id, img }) => {
  return (
    <Card className="product-card">
      <CardMedia
        component={"img"}
        className="product-card-img"
        image={img}
        title={title}
      />
      <CardContent className="product-card-content">
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" className="product-card-price">
          ${price} {/* */}
        </Typography>
      </CardContent>
      <CardActions className="product-card-actions">
        <Box sx={{ flexGrow: 1 }}></Box> {/* */}
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" variant="outlined" className="product-card-button">
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

