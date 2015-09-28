import "assets/index.html";
import React from "react";
import ReactDOM from "react-dom";

import SVG from "svg";
import Projection from "projection";
import FeatureCollection from "featureCollection";

const karta = (
  <SVG width={960} height={960}>
    <Projection>
      <FeatureCollection />
    </Projection>
  </SVG>
);

ReactDOM.render(karta, document.getElementById("root"));

