import React, {useState, useRef, useEffect} from "react";
import "./App.css";
import GlobeObject from "./globe_component/globe_object";
import CustomizedTimeline from "./timeline_components/customized_timeline";
import DiscreteSlider from "./slider/discrete_slider";
import useWindowDimensions from "./services/useWindowDimensions";
import logo from "./assets/logo.svg";

const App = () => {
  const { height, width } = useWindowDimensions();
  const [eventItems, setEventItem] = useState([])
  const globeEl = useRef();

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;

    //use this to zoom into location 
  }, []);

  //zooms in to a particular lat, lon on the globe
  function focusOnEvent(lat, lon, alt){
    globeEl.current.pointOfView(
      { lat: lat, lng: lon, altitude: alt },
      5000
    );
    globeEl.current.controls().autoRotate = false;
  }

  function fetchEvents(era) {
    console.log(era);

    const requestOptions = {
      method: "POST",
      // headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        era: "3100BCE", //get era from the slider
      }),
    };

    fetch(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/boring-atlas-rest-api-hqzzz/service/boring-atlas-data-endpoint/incoming_webhook/boring-atlas-endpoint-webhook",
      requestOptions
    )
      .then((response) => response.json())
      .then(function (data) {
        const items = data[0]["events"];

        //add these do data using hooks
        items.forEach((ele, _) => {
          var items = ele.split(";");
          console.log(items);
        });

        //pass lat, lon from the json along with an altitude to zoom in to the map
        focusOnEvent(-33.865143, 151.2099, 0.5)
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
      <GlobeObject globeEl={globeEl}/>
      <div style={timelinePositionStyle}>
        <CustomizedTimeline
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          onClicked={(e) => fetchEvents(e)}
        />
      </div>
      <div style={sliderPositionStyle}>
        <DiscreteSlider />
      </div>
    </div>
  );
};

export default App;
