import React from "react";
import { Paper, Toolbar, Typography, Button, IconButton, useTheme, AppBar, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ px: 2 }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Free Shipping on all orders</Typography>

        {/* <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchIcon />
          <InputBase
            placeholder="Search all Blinds"
            inputProps={{ "aria-label": "search" }}
            style={{
              color: "inherit",
              paddingLeft: `calc(1em + 32px)`,
              width: "100%",
            }}
          />
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
