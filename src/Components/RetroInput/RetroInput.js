import React from "react";
import TextField from '@mui/material/TextField';
import { ReactComponent as AvaxLogo } from "./AvaxLogo.svg";
import { ReactComponent as RetroLogo } from "./RetroLogo.svg";

const RetroInput = (props) => {
  let icon = null;

  if (props.name === "AvaxInput") {
    icon = <AvaxLogo />;
  } else if (props.name === "RetroInput") {
    icon = <RetroLogo />;
  }

  const handleChange = (event) => {
    console.log(event);
  }

  console.log(props)

  return (
    <TextField
      InputProps={{
        startAdornment: icon
      }}
    />
  );
}

export default RetroInput;