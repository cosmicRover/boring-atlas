import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import "../App.css";
import art from "../assets/art.png";
import civ from "../assets/civilization.png";
import cor from "../assets/coronation.png";
import death from "../assets/death.png";
import disc from "../assets/discovery.png";
import doc from "../assets/document.png";
import end from "../assets/end.png";
import inv from "../assets/invention.png";
import mon from "../assets/monument.png";
import set from "../assets/settlement.png";
import start from "../assets/start.png";
import war from "../assets/war.png";

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

  function getAnIcon(type) {
    switch (type) {
      case "art":
        return art;
      case "civilization":
        return civ;
      case "coronation":
        return cor;
      case "death":
        return death;
      case "discovery":
        return disc;
      case "document":
        return doc;
      case "end":
        return end;
      case "invention":
        return inv;
      case "monument":
        return mon;
      case "settlement":
        return set;
      case "start":
        return start;
      case "war":
        return war;
      default:
        console.log("this is an error returning an icon type");
        return "../assets/art.png";
    }
  }

  const icon = getAnIcon(imageUrl);

  return (
    <div class="iconStyle">
      <img src={icon} width="67" height="69" alt=""></img>
    </div>
  );
};

export default CircularIcon;
