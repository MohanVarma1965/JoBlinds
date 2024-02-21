import React from "react";
import { Container, Grid, Typography, Link, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "black", color: "white", py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Stay Connected
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              JoBlinds News
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Subscribe to the JoBlinds Daily
            </Link>
            {/* Social icons would go here */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Who We Are
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              Company
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Careers
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Partners
            </Link>
            <br />
            {/* ... other links */}
          </Grid>
          {/* ... other columns */}
        </Grid>
        <Box sx={{ borderTop: "1px solid grey", mt: 4, pt: 2 }}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="caption">Terms of Service | Privacy Policy | Sitemap</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">© 2024 JoBlinds Inc. All Rights Reserved. (0.X.XXXX XXX)</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
