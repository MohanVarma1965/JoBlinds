import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function ImageCarousel({ items }) {
  return (
    <Carousel
      fullHeightHover={false} // Prevents the full height hover effect (optional)
      navButtonsAlwaysVisible={true} // Shows navigation buttons
      navButtonsProps={{
        // Change the colors and style of the navigation buttons
        style: {
          backgroundColor: "cornflowerblue",
          color: "white",
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper
      style={{
        height: 250,
        width: "100%",
        backgroundImage: `url(${props.item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      elevation={3}
    >
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default ImageCarousel;
