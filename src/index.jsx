import "assets/index.html";
import React from "react";
import ReactDOM from "react-dom";
import d3 from "d3";

import Canvas from "canvas";
import GeoPathRenderer from "geoPathRenderer";
import Projection from "projection";
// import FeatureCollection from "featureCollection";
import Sphere from "sphere";
import WorldCountriesMesh from "worldCountriesMesh";
import WorldCountriesLand from "worldCountriesLand";

const App = React.createClass({
  getInitialState() {
    return {
      start: Date.now(),
      rotation: 0,
    };
  },

  componentDidMount() {
    this.tick();
    d3.timer(() => {
      this.tick();
    });
    // setInterval(this.tick, 1000);
  },

  render() {
    return (
      <Projection width={960} height={720} rotation={this.state.rotation} canvas={Canvas} renderer={GeoPathRenderer}>
        <WorldCountriesLand fill={"#333"} />
        <WorldCountriesMesh fill={"#333"} />
        <Sphere />
      </Projection>
    );
  },

  tick() {
    // this.setState({ rotation: 1e-2 * Date.now() - this.state.start });
    // requestAnimationFrame(this.tick);
  },

});

ReactDOM.render(<App />, document.getElementById("root"));

