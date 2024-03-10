import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const DisplayNames = (props) => {
  return (
    <div>
      <Typography variant="h6">Submitted Names:</Typography>
      <List>
        {props.names.map((submittedName, index) => (
          <ListItem key={index}>
            <ListItemText primary={submittedName} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DisplayNames;
