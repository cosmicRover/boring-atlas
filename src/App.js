import React from "react";
import "./App.css";
import GlobeObject from "./globe_component/globe_object";
import CustomizedTimeline from "./timeline_components/customized_timeline";
import DiscreteSlider from "./slider/discrete_slider";
import useWindowDimensions from "./services/useWindowDimensions";
import logo from "./assets/logo.svg";

const App = () => {
  const { height, width } = useWindowDimensions();

  function fetchEvents(era) {
    console.log(era);

    const requestOptions = {
      method: "POST",
      // headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        era: "3000BCE",
      }),
    };

    fetch(
      "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/boring-atlas-rest-api-hqzzz/service/boring-atlas-data-endpoint/incoming_webhook/boring-atlas-endpoint-webhook",
      requestOptions
    )
      .then((response) => response.json())
      .then(function (data) {
        const items = data[0]["event"];

        //add these do data using hooks
        items.forEach((ele, _) => {
          console.log(ele);
        });
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
      <GlobeObject />
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
