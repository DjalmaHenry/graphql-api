import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import iPhone from "../../../assets/img/iphone-14.webp";
import "./HomeCard.css";
export default function HomeCard() {
  return (
    <Card className="card" sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image={iPhone}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Detalhes
        </Typography>
        <Typography variant="body2" color="text.secondary">
          iPhone 14 pro max, de 512gb com 3 cameras, tela de 6.7 polegadas e
          processador A15 Bionic de 5nm com 6 núcleos.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Preço
        </Typography>
        <Typography variant="body2" color="text.secondary">
          R$ 10.000,00
        </Typography>
        <CardActions>
          <Button size="small">Comprar</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
