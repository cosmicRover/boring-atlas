import Globe from "react-globe.gl";
import {React, useRef, useState, useEffect} from "react";
import "../App.css";
import useWindowDimensions from "../services/useWindowDimensions";

const GlobeObject = (_) => {
   
  //TODO clean these up. might need to pass globeEl from parent class
  const globeEl = useRef();
   const [countries, setCountries] = useState({ features: [] });
   const [altitude, setAltitude] = useState(0.1);
   const [transitionDuration, setTransitionDuration] = useState(1000);

   useEffect(() => {
     // load data
     fetch("../datasets/ne_110m_admin_0_countries.geojson")
       .then((res) => res.json())
       .then((countries) => {
         setCountries(countries);

         setTimeout(() => {
           setTransitionDuration(4000);
           setAltitude(() => (feat) =>
             Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 7e-5)
           );
         }, 3000);
       });
   }, []);

   useEffect(() => {
     // Auto-rotate
     globeEl.current.controls().autoRotate = false;
     globeEl.current.controls().autoRotateSpeed = 0.9;

     globeEl.current.pointOfView({lat:-33.865143, lng:151.209900, altitude: 0.5 }, 5000);
   }, []);


  //pass params
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
    />
  );
};

export default GlobeObject;
