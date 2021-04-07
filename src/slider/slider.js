import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./slider.css";

const useStyles = makeStyles({
  root: {
    width: 800, //Changes length of slider
  },
});

//? Probably needs changes
const PrettoSlider = withStyles({
  root: {
    color: "#9ddfd3", //Insert color hexcode here
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 6, //Changes height of the selected area of slider
    borderRadius: 4,
  },
  rail: {
    height: 6, //Changes height of the non-selected area of slider
    borderRadius: 4,
  },
})(Slider);

//Tick Marks, can probably put this into another file
const mark = [
  {
    value: 1,
    label: "Start",
  },
  {
    value: 1000,
    label: "Middle",
  },
  {
    value: 2021,
    label: "End",
  },
];

//Returns whatever value slider is left off on
function valuetext(value) {
  //   console.log(value);
  return `${value}°C`;
}

// Getting value of slider, there is a slight issue with this
// const getValue = (e, value) => {
//   console.log(value);
// };

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Title of Slider, not sure if we will need it*/}
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Boring Atlas
      </Typography>
      {/* The actual slider values */}
      <PrettoSlider
        defaultValue={1001}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={100} //Increments
        marks={mark} //Implement the tickers
        min={1} //Minimum Value
        max={2021} //Maximum Value
        valueLabelDisplay="auto" //Displays value as you slide
        // onChange={getValue}
      />
    </div>
  );
}
