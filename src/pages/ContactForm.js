import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Container, Box } from "@mui/material";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, such as sending the data to a server
    console.log(formValues);
    alert("Form submitted. Check console for details.");
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "#d1baba", py: 0.5 }}>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" align="center" marginY={4} sx={{ color: "white" }}>
            Contact Us
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                fullWidth
                onChange={handleChange}
                value={formValues.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                fullWidth
                onChange={handleChange}
                value={formValues.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                onChange={handleChange}
                value={formValues.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Phone" name="phone" fullWidth onChange={handleChange} value={formValues.phone} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                name="message"
                multiline
                rows={2}
                fullWidth
                onChange={handleChange}
                value={formValues.message}
              />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Button type="submit" variant="contained" color="secondary" sx={{ alignSelf: "center", width: "50%" }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default ContactForm;
