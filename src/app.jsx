import React from "react";
import d3 from "d3";

import { connect } from "react-redux";
import {
  incRotation, setPaintContext, setScaleAndTranslate,
  startInteraction, endInteraction,
} from "./actions";

import Canvas from "canvas";
import GeoPathRenderer from "geoPathRenderer";
import Projection from "projection";
// import FeatureCollection from "featureCollection";
import Sphere from "sphere";
// import World110m from "world110m";
import World50m from "world50m";
import CountriesLand from "countriesLand";
import CountriesMesh from "countriesMesh";

// let stop = true;
const App = React.createClass({
  // getInitialState() {
  //   return {
  //     start: Date.now(),
  //     rotation: 0,
  //   };
  // },

  componentDidMount() {
    // this.tick();
    // d3.timer(() => {
    //   this.tick();
    //   return stop;
    // });
    // setInterval(this.tick, 1000);
  },

  render() {
    const { dispatch } = this.props;
            // <CountriesLand fill="#333" />
    return (
      <div>
        <Projection width={960} height={720} canvas={Canvas} renderer={GeoPathRenderer} onPaintContext={context => dispatch(setPaintContext(context))} context={this.props.context} projection={this.props.projection} path={this.props.path} drag={true} zoom={true} onSetScaleAndTranslate={(scale, translate) => dispatch(setScaleAndTranslate(scale, translate))} onSetTranslate={translate => dispatch(setTranslate(translate))} onStartInteraction={() => dispatch(startInteraction())} onEndInteraction={() => dispatch(endInteraction())}>
          <World50m data={this.props.data}>
            <CountriesLand fill="#333" />
            <CountriesMesh fill="#333" />
          </World50m>
          <Sphere />
        </Projection>
      </div>
    );
  },

  tick() {
    // this.props.dispatch(incRotation(1));
    // this.setState({ rotation: 1e-2 * Date.now() - this.state.start });
    // requestAnimationFrame(this.tick);
  },
});

function select(state) {
  return state;
}

// export default connect(select, null, null, { pure: false })(App);
export default connect(select)(App);


