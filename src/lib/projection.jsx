import React from "react";
import d3 from "d3";

export default React.createClass({
  childContextTypes: {
    projection: React.PropTypes.func.isRequired,
  },

  getChildContext() {
    const width = 960;
    const height = 960;

    const projection = d3.geo.mercator()
        .scale((width + 1) / 2 / Math.PI)
        .translate([width / 2, height / 2])
        .precision(0.1);

    return {
      projection,
    };
  },

  render() {
    return this.props.children;
  },
});
