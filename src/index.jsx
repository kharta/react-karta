import "assets/index.html";
import React from "react";
import ReactDOM from "react-dom";

import Projection from "projection";
import FeatureCollection from "featureCollection";

const square = { "type": "FeatureCollection", "features": [ { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 9.4921875, -13.2399454992863 ], [ 9.4921875, 52.908902047770255 ], [ 116.3671875, 52.908902047770255 ], [ 116.3671875, -13.2399454992863 ], [ 9.4921875, -13.2399454992863 ] ] ] } } ] };

const karta = (
  <Projection>
    <FeatureCollection geoJSON={square} />
  </Projection>
);

ReactDOM.render(karta, document.getElementById("root"));

