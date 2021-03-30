import Globe from "react-globe.gl";
import React from "react-globe.gl";

const GlobeObject = (_) => { //pass params
  return (
    <Globe
      globeImageUrl="https://res.cloudinary.com/dmhit0ltx/image/upload/v1613871735/3_no_ice_clouds_8k_cnbuqw.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundImageUrl="https://res.cloudinary.com/dmhit0ltx/image/upload/v1617126300/wowow_c87ssn.png"
    />
  );
};

export default GlobeObject;