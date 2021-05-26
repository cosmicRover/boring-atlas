import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TimelineConnector } from '@material-ui/lab';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import CircularIcon from './circular_icon';
import icon1 from '../assets/icon1.png';
import '../App.css';

import './timeline.css';

//TODO: re-design this to match provided design docs

import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,

    color: 'white',

    color: 'white',
    margin: '1px',
    fontSize: '5px',
  },
});

function RenderItem({ values, onClicked }) {
  const classes = useStyles();

  if (values) {
    //loop through each item and add to render list
    const renderList = values.map((item, index) => {
      return (

        <div className="centerButtonText" onClick={() => onClicked(index)}>
          <CircularIcon imageUrl={icon1} />
          <div className="vertical-bar"></div>

        <div class="centerButtonText" onClick={() => onClicked(index)}>
          <TimelineConnector />

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
