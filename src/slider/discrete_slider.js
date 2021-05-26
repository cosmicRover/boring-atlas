import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import useWindowDimensions from "../services/useWindowDimensions";
import {
  HistoryTwoTone,
  PlayCircleFilledWhite,
  Rotate90DegreesCcw,
} from "@material-ui/icons";
import "./slider.css";
import { marks } from "./marks.js";

const useStyles = makeStyles({
  root: {
    width: 800, //Changes length of slider
  },
  mark: {
    //Here for the text of timeline
    color: "rgba(243, 163, 17, 1)",
    fontSize: "20px",
    // marginLeft: '5px', //Aligning the text (when un-rotated)
    marginLeft: "-8px", //Aligning the text (rotated)
    transform: "rotate(-45deg)",
  },
});
//? Probably needs changes
const PrettoSlider = withStyles({
  root: {
    color: "rgba(243, 163, 17, 1)", //Insert color hexcode here
  },
  //Thumb styling
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "background: rgba(243, 163, 17, 1);",
    border: "2px solid currentColor",
    marginTop: -12, //Where the thumb resides on slider
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  //The label for when point is selected
  valueLabel: {
    left: "calc(-50% + 4px)",
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
    bottom: "8px",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
  },
})(Slider);

//Returns whatever value slider is left off on
function valuetext(value) {
  if (value === 0) {
    return `${value}AD`;
  } else if (value > 0) {
    return `${value}AD`;
  } else if (value < 0) {
    return `${-value}BCE`;
  }
}

// Getting value of slider, there is a slight issue with this
// const getValue = (e, value) => {
//   console.log(value);
// };

const DiscreteSlider = ({ getSliderValue }) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(-3000);

  //updates value and sends back to app.js
  const handleChange = (event, newValue) => {
    if (newValue !== value) {
      setValue(newValue);
      const item = valuetext(newValue);
      getSliderValue(item);
    }
  };

  return (
    <div>
      {/* The actual slider values */}
      <PrettoSlider
        defaultValue={value}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={100} //Increments
        marks={marks} //Implement the tickers
        classes={{ markLabel: classes.mark }}
        min={-3000} //Minimum Value
        max={2000} //Maximum Value
        valueLabelDisplay="auto" //Displays value as you slide
        // onChange={handleChange}
        onChangeCommitted={handleChange} //waits for the vlaue to settle first
      />
    </div>
  );
};

export default DiscreteSlider;
