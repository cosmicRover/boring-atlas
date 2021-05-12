import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import useWindowDimensions from "../services/useWindowDimensions";

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
const marks = [
  {
    value: 100,
    label: "100",
  },
  {
    value: 200,
    label: "200",
  },
  {
    value: 300,
    label: "300",
  },
  {
    value: 400,
    label: "400",
  },
  {
    value: 500,
    label: "500",
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

const DiscreteSlider = ({markers}) => {
  const classes = useStyles();

  return (
    <div>
      {/* Title of Slider, not sure if we will need it*/}
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Boring Atlas
      </Typography>
      {/* The actual slider values */}
      <PrettoSlider
        defaultValue={100}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={100} //Increments
        marks={marks} //Implement the tickers
        min={100} //Minimum Value
        max={500} //Maximum Value
        valueLabelDisplay="auto" //Displays value as you slide
        // onChange={getValue}
      />
    </div>
  );
}

export default DiscreteSlider;
