import React from "react";
import { Box, Typography } from "@mui/material";

const BannerImage = () => {
  return (
    <Box
      sx={{
        height: 300,
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <source src="/videos/bannerImage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          zIndex: 1, // Ensures the text appears above the video
          textAlign: "center",
          backdropFilter: "blur(3px)", // Optional: adds a blur effect to the video background
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "#e57d7d",
            fontWeight: "bold",
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              md: "2.5rem",
            },
          }}
        >
          Take an extra 25% off sitewide on Blinds
        </Typography>
      </Box>
    </Box>
  );
};

export default BannerImage;
