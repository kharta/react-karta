import React from "react";
import d3 from "d3";

export default React.createClass({
  propTypes: {
    children: React.PropTypes.object,
  },

  contextTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    path: React.PropTypes.func.isRequired,
  },

  childContextTypes: {
    projection: React.PropTypes.func.isRequired,
  },

  getChildContext() {
    const width = this.context.width;
    const height = this.context.height;

    const projection = d3.geo.conicConformal()
        .scale((width + 1) / 2 / Math.PI)
        .translate([width / 2, height / 2])
        .precision(0.1);

    this.context.path.projection(projection);

    return {
      projection,
    };
  },

  render() {
    return this.props.children;
  },
});
