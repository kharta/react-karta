import "assets/index.html";
import React from "react";
import ReactDOM from "react-dom";

import Canvas from "canvas";
import Projection from "projection";
// import FeatureCollection from "featureCollection";
// import WorldCountriesMesh from "worldCountriesMesh";
import WorldCountriesLand from "worldCountriesLand";

const App = React.createClass({
  getInitialState() {
    return { rotation: 0 };
  },

  componentDidMount() {
    // requestAnimationFrame(this.tick);
  },

  render() {
    return (
      <Canvas width={960} height={960}>
        <Projection rotation={this.state.rotation}>
          <WorldCountriesLand fill={"#333"} />
        </Projection>
      </Canvas>
    );
  },

  tick() {
    this.setState({ rotation: this.state.rotation + 1 });
    // requestAnimationFrame(this.tick);
  },

});

ReactDOM.render(<App />, document.getElementById("root"));

