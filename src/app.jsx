import React from "react";
import d3 from "d3";

import { connect } from "react-redux";
import { incRotation } from "./actions";

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
    const { dispatch } = this.props;
    return (
      <Projection width={960} height={720} rotation={this.props.projection.rotation} canvas={Canvas} renderer={GeoPathRenderer}>
        <WorldCountriesLand fill={"#333"} />
        <WorldCountriesMesh fill={"#333"} />
        <Sphere />
        <button onClick={() =>
          dispatch(incRotation(1))
        }>Rotate!</button>
      </Projection>
    );
  },

  tick() {
    // this.setState({ rotation: 1e-2 * Date.now() - this.state.start });
    // requestAnimationFrame(this.tick);
  },
});

function select(state) {
  return state;
}

export default connect(select)(App);


