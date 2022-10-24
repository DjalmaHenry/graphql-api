import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import iPhone from "../../../assets/img/iphone-14.webp";
import "./ProductCard.css";

// type ProductProps = {
//   id: number;
//   image: string;
//   description: string;
//   provider: string;
//   price: number;
//   name: string;
// };

export default function ProductCard(product: any) {
  return (
    <Card className="card" sx={{ maxWidth: 500 }}>
      <CardMedia component="img" height="140" image={iPhone} alt="product" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Detalhes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" component="div">
          Fornecedor: {product.provider}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Preço
        </Typography>
        <Typography variant="body2" color="text.secondary">
          R$ {product.price}
        </Typography>
        <CardActions>
          <Button size="small">Comprar</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
