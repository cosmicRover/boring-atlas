import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import GlobeObject from "./globe_component/globe_object";
import CustomizedTimeline from "./timeline_components/customized_timeline";
import DiscreteSlider from "./slider/discrete_slider";
import useWindowDimensions from "./services/useWindowDimensions";
import logo from "./assets/logo.svg";

const App = () => {
  const { height, width } = useWindowDimensions();
  const [eventItems, setEventItem] = useState([]);

  const [mapMarkers, setMapMarkers] = useState([]);

  const globeEl = useRef();

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;

    fetchEvents("3000BCE");

    //use this to zoom into location
  }, []);

  function handleOnPressed(index) {
    var item = eventItems[index];
    focusOnEvent(item.lat, item.lon, 0.5);
  }

  function handleOnLabelClicked(item) {
    console.log(item);
  }

  //zooms in to a particular lat, lon on the globe
  function focusOnEvent(lat, lon, alt) {
    globeEl.current.pointOfView({ lat: lat, lng: lon, altitude: alt }, 5000);
    globeEl.current.controls().autoRotate = false;
  }

  //helper fucntion to plot the data

  function fetchEvents(era) {
    console.log(era);
    setEventItem([]);

    const requestOptions = {
      method: "POST",
      // headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        era: era, //get era from the slider
      }),
    };

    fetch(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/boring-atlas-rest-api-hqzzz/service/boring-atlas-data-endpoint/incoming_webhook/boring-atlas-endpoint-webhook",
      requestOptions
    ).then(function (response) {
      if (response.status === 200) {
        response.json().then(function (data) {
          const items = data[0]["events"];

          // console.log(items)

          //add these do data using hooks
          items.forEach((ele, index) => {
            var events = ele.split(";");

            const coordinates = events[4].split(",");
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

            console.log("event items are ->>>> ", eventObject);

            setEventItem((oldEvents) => [...oldEvents, eventObject]);
          });
        });
      } else {
        console.log("No events found, error!");
        setEventItem([]);
      }
    });
  }

  var timelinePositionStyle = {
    backgroundColor: "transparent",
    height: `${(height - 228).toString()}px`,
    width: `${(width / 4).toString()}px`,
    position: "absolute",
    top: "28px",
    left: "28px",
    overflow: "auto",
  };

  var sliderPositionStyle = {
    backgroundColor: "transparent",
    height: `100px`,
    width: `${(width / 1.5).toString()}px`,
    position: "absolute",
    bottom: "28px",
    left: "130px",
    right: "130px",
  };

  return (
    <div>
      <GlobeObject
        globeEl={globeEl}
        data={eventItems}
        hadleLabelClick={(e) => handleOnLabelClicked(e)}
      />
      <div style={timelinePositionStyle}>
        <CustomizedTimeline
          data={eventItems}
          onClicked={(index) => handleOnPressed(index)}
        />
      </div>
      <div style={sliderPositionStyle}>
        <DiscreteSlider />
      </div>
    </div>
  );
};

export default App;
