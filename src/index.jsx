import "assets/index.html";
import React from "react";
import ReactDOM from "react-dom";

import SVG from "svg";
import Projection from "projection";
// import FeatureCollection from "featureCollection";
import WorldCountriesMesh from "worldCountriesMesh";
import WorldCountriesLand from "worldCountriesLand";

const karta = (
  <SVG width={960} height={960}>
    <Projection>
      <WorldCountriesLand fill={"#333"} />
      <WorldCountriesMesh stroke={"white"} />
    </Projection>
  </SVG>
);

ReactDOM.render(karta, document.getElementById("root"));

