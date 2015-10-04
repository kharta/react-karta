import React from "react";
import d3 from "d3";

import { connect } from "react-redux";
import { incRotation, setPaintContext } from "./actions";

import Canvas from "canvas";
import GeoPathRenderer from "geoPathRenderer";
import Projection from "projection";
// import FeatureCollection from "featureCollection";
import Sphere from "sphere";
import World110m from "world110m";
import CountriesLand from "countriesLand";
import CountriesMesh from "countriesMesh";

let stop = false;
const App = React.createClass({
  // getInitialState() {
  //   return {
  //     start: Date.now(),
  //     rotation: 0,
  //   };
  // },

  componentDidMount() {
    this.tick();
    d3.timer(() => {
      this.tick();
      return stop;
    });
    // setInterval(this.tick, 1000);
  },

  render() {
    const { dispatch } = this.props;
            // <CountriesLand fill="#333" />
    return (
      <div>
        <Projection width={960} height={720} canvas={Canvas} renderer={GeoPathRenderer} onPaintContext={context => dispatch(setPaintContext(context))} context={this.props.context} projection={this.props.projection}>
          <World110m data={this.props.data}>
            <CountriesLand fill="#333" />
            <CountriesMesh fill="#333" />
          </World110m>
          <Sphere />
        </Projection>
        <button onClick={() =>
          stop = true
        }>Rotate!</button>
      </div>
    );
  },

  tick() {
    this.props.dispatch(incRotation(1))
    // this.setState({ rotation: 1e-2 * Date.now() - this.state.start });
    // requestAnimationFrame(this.tick);
  },
});

function select(state) {
  return state;
}

// export default connect(select, null, null, { pure: false })(App);
export default connect(select)(App);


