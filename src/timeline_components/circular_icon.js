import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import "../App.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

const CircularIcon = ({ imageUrl }) => {
  const classes = useStyles();


  return (
    <div class="iconStyle">
      <img src={imageUrl} width="67" height="69" alt="icon"></img>
      <TimelineConnector></TimelineConnector>
    </div>
  );
};

export default CircularIcon;
