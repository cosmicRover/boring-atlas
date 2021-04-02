import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  description: {
    fontSize: "12px",
    align: "left",
  },

  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function RenderItem({ values }) {
  const classes = useStyles();

  if (values) {
    //loop through each item and add to render list
    const renderList = values.map((index, item) => {
      return (
        <Timeline align="alternate" key={index}>
          <div
            onClick={() =>
              console.log(`clicked key ${index} pass onClickHandle here`)
            }
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography class={classes.label}>
                    YYYY: Event name
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </div>
        </Timeline>
      );
    });

    return renderList;
  } else {
    return <h1> No results found</h1>;
  }
}

function CustomizedTimeline({ data }) {
  return <RenderItem values={data} />;
}

export default CustomizedTimeline;
