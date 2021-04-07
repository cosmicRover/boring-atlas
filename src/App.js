import React from "react";
import "./App.css";
import GlobeObject from "./globe_component/globe_object";
import CustomizedTimeline from "./timeline_components/slide_object";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import DiscreteSlider from "./slider/slider";

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

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <CustomizedTimeline
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
        />
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <GlobeObject />
      </main>

      <div className="testContainer">
        <DiscreteSlider />
      </div>
    
    </div>
  );
}

export default App;
