
import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import GlobeObject from "./globe_component/globe_object";
import CustomizedTimeline from "./timeline_components/customized_timeline";
import DiscreteSlider from "./slider/discrete_slider";
import useWindowDimensions from "./services/useWindowDimensions";
import logo from "./assets/logo.svg";
import Popper from "./popup/popper";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles({
  paper: {
    background: "RGBA(20, 39, 59, 0.5)",
    color: "white",
    width: "517px",
    height: "50%",
  },
});

import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import GlobeObject from './globe_component/globe_object';
import CustomizedTimeline from './timeline_components/customized_timeline';
import DiscreteSlider from './slider/discrete_slider';
import useWindowDimensions from './services/useWindowDimensions';
import logo from './assets/ba_logo.png';


const App = () => {
  const { height, width } = useWindowDimensions();
  const [eventItems, setEventItem] = useState([]);

  const globeEl = useRef();

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;

    fetchEvents("3000BCE");

  }, []);

  function handleOnPressed(index) {
    var item = eventItems[index];
    focusOnEvent(item.lat, item.lon, 0.5);
  }

  //TODO: Oncle clicked on the label, get the desired item
  const [focusIndex, setFocusIndex] = useState(0);

  function handleOnLabelClicked(item) {
    console.log(`this is the clicked item: `, item);
    const index = search(item.title, eventItems);
    console.log(item, eventItems[index]);
    setFocusIndex(index);

    openDrawer(true);
  }

  function search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].title === nameKey) {
        return i;
      }
    }
  }

  //this is for slide-in window on the right side

  //state and function for popup window
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  function openDrawer(value) {
    setIsOpen(value);
  }

  //zooms in to a particular lat, lon on the globe
  function focusOnEvent(lat, lon, alt) {
    globeEl.current.pointOfView({ lat: lat, lng: lon, altitude: alt }, 5000);
    globeEl.current.controls().autoRotate = false;
  }

  //helper fucntion to plot the data
  function fetchEvents(era) {
    console.log(`fetching era: ${era}`);
    setEventItem([]);

    const requestOptions = {
      method: 'POST',
      // headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        era: era, //get era from the slider
      }),
    };

    fetch(
      'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/boring-atlas-rest-api-hqzzz/service/boring-atlas-data-endpoint/incoming_webhook/boring-atlas-endpoint-webhook',
      requestOptions
    ).then(function (response) {
      if (response.status === 200) {
        response.json().then(function (data) {
          //avoids populating timeline for empty events
          if (data.length === 0) {
            setEventItem([]);
            return;
          }

          const items = data[0]['events'];

          // console.log(items)

          //add these do data using hooks
          items.forEach((ele, index) => {
            var events = ele.split(';');

            const coordinates = events[4].split(',');
            coordinates[0].trim();
            coordinates[1].trim();
            const lat = parseFloat(coordinates[0]);
            const lon = parseFloat(coordinates[1]);

            // console.log(events.toString());

            const eventObject = {
              date: events[0].trim(),
              title: events[1].trim(),
              event: events[2].trim(),
              type: events[3].trim(),
              lat: lat,
              lon: lon,
            };

            //plot the data

            console.log('event items are ->>>> ', eventObject);

            setEventItem((oldEvents) => [...oldEvents, eventObject]);
          });
        });
      } else {
        console.log('No events found, error!');
        setEventItem([]);
      }
    });
  }

  //timeline and slider css
  var timelinePositionStyle = {
    // backgroundColor: 'RGBA(20, 39, 59, 0.5)',
    height: `${(height - 228).toString()}px`,
    width: `${100}`,
    position: 'absolute',
    top: '128px',
    left: '28px',
    overflow: 'auto',
  };

  var sliderPositionStyle = {
    // backgroundColor: 'RGBA(20, 39, 59, 0.5)',
    height: `100px`,
    width: `${100}`,
    position: 'absolute',
    bottom: '28px',
    left: '130px',
    right: '130px',
  };

  return (
    <div>
      <GlobeObject
        globeEl={globeEl}
        data={eventItems}
        hadleLabelClick={(e) => handleOnLabelClicked(e)}
      />

      {/* Logo */}
      <a href="/" id="logo">
        <img src={logo} alt="logo" />
      </a>

      {/* Year Displayer */}
      <div id="year">
        <h1>Current Year: 3000 BC</h1>
      </div>

      <div style={timelinePositionStyle}>
        <CustomizedTimeline
          data={eventItems}
          onClicked={(index) => handleOnPressed(index)}
        />
      </div>
      <div style={sliderPositionStyle}>
        <DiscreteSlider getSliderValue={(era) => fetchEvents(era)} />
      </div>


      <div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer(false)}
          anchor={"right"}
          classes={{ paper: classes.paper }}
        >
          <Popper value={eventItems[focusIndex]} />
        </Drawer>
      </div>

    </div>
  );
};

export default App;
