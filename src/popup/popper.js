import React, { Component, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  typography: {
    align: "center",
  },
});

const Popper = ({ value }) => {
  const classes = useStyles();

  return (
    <Typography component="div">
      <Box fontWeight="fontWeightBold" fontSize="24px" m={1} textAlign="center">
        {`${value.date}: `}
        {value.title}
      </Box>
      <Box
        fontWeight="fontWeightLight"
        fontFamily="Montserrat"
        fontSize="16px"
        m={3}
        lineHeight={1.5}
        //   textAlign="center"
      >
        {value.event}
      </Box>

      <Box
        fontFamily="Montserrat"
        fontSize="16px"
        fontWeight="fontWeightBold"
        m={3}
        lineHeight={1.5}
        //   textAlign="center"
      >
        {"Resources/links/audio/video goes here"}
      </Box>
    </Typography>
  );
};

export default Popper;
