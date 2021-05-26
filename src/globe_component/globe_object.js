import Globe from "react-globe.gl";
import {React, useRef, useState, useEffect} from "react";
import "../App.css";
import useWindowDimensions from "../services/useWindowDimensions";

const GlobeObject = ({globeEl, data, hadleLabelClick}) => {
  const { height, width } = useWindowDimensions();


  return (
    <Globe
      ref={globeEl}
      class="globe-container"
      globeImageUrl="https://res.cloudinary.com/dmhit0ltx/image/upload/v1613871735/3_no_ice_clouds_8k_cnbuqw.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundImageUrl="https://res.cloudinary.com/dmhit0ltx/image/upload/v1620417966/wow_m8riir.jpg"
      height={height}
      width={width}
      // labelsData={data}

      labelsData={data}
      labelLat="lat"
      labelLng="lon"
      labelDotRadius={1}
      labelText="title"
      labelDotOrientation={() => "bottom"}
      labelSize={1}
      labelColor={() => "rgba(20, 33, 61, 1)"}
      labelResolution={2}
      onLabelClick={(item) => hadleLabelClick(item)} //todo pass an unique key to the callback
    />
  );
};

export default GlobeObject;
