import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import useWindowDimensions from '../services/useWindowDimensions';
import {
  HistoryTwoTone,
  PlayCircleFilledWhite,
  Rotate90DegreesCcw,
} from '@material-ui/icons';
import './slider.css';

const useStyles = makeStyles({
  root: {
    width: 800, //Changes length of slider
  },
  mark: {
    //Here for the text of timeline
    color: 'rgba(243, 163, 17, 1)',
    fontSize: '20px',
    // marginLeft: '5px', //Aligning the text (when un-rotated)
    marginLeft: '-8px', //Aligning the text (rotated)
    transform: 'rotate(-45deg)',
  },
});
//? Probably needs changes
const PrettoSlider = withStyles({
  root: {
    color: 'rgba(243, 163, 17, 1)', //Insert color hexcode here
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: 'background: rgba(243, 163, 17, 1);',
    border: '2px solid currentColor',
    marginTop: -12, //Where the thumb resides on slider
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  //The label for when point is selected
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 2, //Changes height of the selected area of slider
    borderRadius: 4,
  },
  rail: {
    height: 2, //Changes height of the non-selected area of slider
    borderRadius: 2,
  },
  mark: {
    //Mark dots styling
    bottom: '8px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  },
})(Slider);

//Tick Marks, can probably put this into another file
const marks = [
  {
    value: 100,
    label: '100',
  },
  {
    value: 150,
    label: '150',
  },
  {
    value: 200,
    label: '200',
  },
  {
    value: 250,
    label: '250',
  },
  {
    value: 300,
    label: '300',
  },
  {
    value: 350,
    label: '350',
  },
  {
    value: 400,
    label: '400',
  },
  {
    value: 450,
    label: '450',
  },
  {
    value: 500,
    label: '500',
  },
];

//Returns whatever value slider is left off on
function valuetext(value) {
  //   console.log(value);
  return `${value}`;
}

// Getting value of slider, there is a slight issue with this
// const getValue = (e, value) => {
//   console.log(value);
// };

const DiscreteSlider = ({ markers }) => {
  const classes = useStyles();

  return (
    <div>
      {/* The actual slider values */}
      <PrettoSlider
        defaultValue={100}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={50} //Increments
        marks={marks} //Implement the tickers
        classes={{ markLabel: classes.mark }}
        min={100} //Minimum Value
        max={500} //Maximum Value
        valueLabelDisplay="auto" //Displays value as you slide
        // onChange={getValue}
      />
    </div>
  );
};

export default DiscreteSlider;
