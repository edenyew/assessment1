import React, { useState } from "react";
import { TextField, Button, Container, Grid, Paper } from "@mui/material";
import DisplayNames from "../DisplayNames/DisplayNames";

const AuthorForm = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNames([...names, name]);
    setName("");
  };

  return (
    <Container maxWidth="sm">
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <h3>AUTHOR FORM</h3>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  label="Author Name"
                  variant="outlined"
                  name="authorName"
                  value={name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
          <div style={{ marginTop: "35px" }}>
            <DisplayNames names={names} />
          </div>
        </Paper>
      </div>
    </Container>
  );
};

export default AuthorForm;
