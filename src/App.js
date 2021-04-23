import React from "react";
import "./App.css";
import GlobeObject from "./globe_component/globe_object";
import CustomizedTimeline from "./timeline_components/customized_timeline";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import DiscreteSlider from "./slider/discrete_slider";
import useWindowDimensions from "./services/useWindowDimensions";

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginLeft: 8,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  var timelinePositionStyle = {
    backgroundColor: "transparent",
    height: `${(height - 228).toString()}px`,
    width: `250px`,
    position: "absolute",
    top: "28px",
    left: "28px",
    // overflow: 'scroll'
  };

  var sliderPositionStyle = {
    backgroundColor: "transparent",
    height: `100px`,
    width: `${(width - 200).toString()}px`,
    position: "absolute",
    bottom: "28px",
    left: "130px",
    right: "130px"
  };

  return (
    <div>
      <GlobeObject />
      <div style={timelinePositionStyle}>
        <CustomizedTimeline data={[1, 2, 3, 4]} />
      </div>
      <div style={sliderPositionStyle}>
        <DiscreteSlider />
      </div>
    </div>
  );
}

export default App;
