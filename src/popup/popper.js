import React, { Component, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import './popper.css';

const useStyles = makeStyles({
  typography: {
    align: 'center',
  },
});

const Popper = ({ value }) => {
  const classes = useStyles();

  return (
    <Typography component="div">
      <Box
        color="rgba(243, 163, 17, 1)"
        fontWeight="fontWeightBold"
        fontSize="24px"
        m={1}
        textAlign="center"
        fontFamily="Roboto"
        letterSpacing="0.08rem"
      >
        {`${value.date}: `}
        {value.title}
      </Box>
      <Box>
        <img
          className="boxImg"
          src="https://s3.amazonaws.com/media.al-fanarmedia.org/wp-content/uploads/2016/12/12094958/history-bg-theme-1.jpg"
        ></img>
      </Box>
      <Box
        border="2px solid rgba(243, 163, 17, 1)"
        padding="1rem"
        fontWeight="fontWeightLight"
        fontSize="18px"
        m={3}
        lineHeight={1.5}
        //   textAlign="center"
      >
        {value.event}
      </Box>

      <Box>
        <iframe
          className="boxVideo"
          height="315"
          src="https://www.youtube.com/embed/7MFKy7DJsCY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>
    </Typography>
  );
};

export default Popper;
