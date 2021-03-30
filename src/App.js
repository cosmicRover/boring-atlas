import React from "react";
import "./App.css";
import GlobeObject from "./globe_component/globe_object";
import CustomizedTimeline from "./timeline_components/slide_object";

function App() {
  return (
    <div class="container">
      <div class="scroller">
        <CustomizedTimeline data={[1, 2, 3, 4]} />;
      </div>
      <div class="globe-container">
        <GlobeObject />
      </div>
    </div>
  );
}

export default App;
