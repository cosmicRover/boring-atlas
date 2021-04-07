import Globe from "react-globe.gl";
import React from "react-globe.gl";
import "../App.css";
import useWindowDimensions from "../services/useWindowDimensions";

const GlobeObject = (_) => {
  //pass params
  const { height, width } = useWindowDimensions();

  return (
    <Globe
      class="globe-container"
      globeImageUrl="https://res.cloudinary.com/dmhit0ltx/image/upload/v1613871735/3_no_ice_clouds_8k_cnbuqw.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundImageUrl="https://res.cloudinary.com/dmhit0ltx/image/upload/v1617328479/back_rs487m.png"
      height={(height - 120).toString()}
      width={(width - 350).toString()}
    />
  );
};

export default GlobeObject;
