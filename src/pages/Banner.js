import React from "react";
import { Box, Typography, AppBar, Toolbar } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

function Banner() {
  return (
    <AppBar position="static" color="secondary" sx={{ background: "black", textAlign: "center" }}>
      <Toolbar variant="dense">
        <Typography variant="body2" color="inherit" sx={{ display: "flex", alignItems: "center" }}>
          <PhoneIcon sx={{ mr: 1 }} /> Call Us: +1 306 456 7890
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Banner;
