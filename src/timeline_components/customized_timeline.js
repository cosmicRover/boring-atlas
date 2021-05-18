import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircularIcon from "./circular_icon";
import "../App.css";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    color: "white",
    margin: "1px",
    fontSize: "5px",
  },
});

function RenderItem({ values, onClicked }) {
  const classes = useStyles();

  if (values) {
    //loop through each item and add to render list
    const renderList = values.map((item, index) => {
      return (
        <div class="centerButtonText" onClick={() => onClicked(index)}>
          <CircularIcon imageUrl={item.type} />
          <div className={classes.root}>
            <Typography component="div">
              <Box fontWeight="fontWeightBold" m={1}>
                {item.date}
              </Box>
              <Box
                fontWeight="fontWeightLight"
                fontFamily="Montserrat"
                fontSize="12px"
                m={1}
                lineHeight={0.95}
              >
                {item.title}
              </Box>
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
