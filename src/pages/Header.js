import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "white", color: "black" }}>
      <Toolbar>
        {/* Place your logo here */}
        <Typography variant="h6" color="inherit">
          JoBlinds
        </Typography>

        {/* Space between navigation and search/cart icons */}
        <div style={{ flexGrow: 1 }}></div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
