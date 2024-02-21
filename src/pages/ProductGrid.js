import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

const ProductGrid = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper
            sx={{
              position: "relative",
              height: 300,
              backgroundImage: `url(${product.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              "&:hover": {
                opacity: 0.7, // Or any other hover effect like changing the brightness
              },
              p: 1,
              m: 1,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "90%",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
                color: "white",
                m: 1,
                p: 3,
              }}
            >
              <Typography variant="h6">{product.title}</Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
