import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularIcon from "./circular_icon";
import icon1 from "../assets/icon1.png";
import "../App.css";

//TODO: re-design this to match provided design docs

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    color: "white",
  },
});

function RenderItem({ values, onClicked }) {
  const classes = useStyles();

  if (values) {
    //loop through each item and add to render list
    const renderList = values.map((index, item) => {
      return (
        <div class="centerButtonText" onClick={() => onClicked(index)}>
          <CircularIcon imageUrl={icon1} />
          <div className={classes.root}>
            <Typography variant="h6" gutterBottom>
              500 BCE
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur
            </Typography>
          </div>
        </div>
      );
    });

    return renderList;
  } else {
    return <h1> No results found</h1>;
  }
}

function CustomizedTimeline({ data, onClicked }) {
  return <RenderItem values={data} onClicked={onClicked} />;
}

export default CustomizedTimeline;
