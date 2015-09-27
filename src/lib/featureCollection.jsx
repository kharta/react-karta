import React from "react";
import d3 from "d3";

export default React.createClass({
  contextTypes: {
    projection: React.PropTypes.func.isRequired,
    foo: React.PropTypes.string.isRequired,
  },

  render() {
    console.log("projection context", this.context.projection);
    console.log("foo", this.context.foo);
    const path = d3.geo.path().projection(this.context.projection);
    const featureCollection = <path d={path(this.props.geoJSON)} />;
    return (
      <svg width="960" height="960">
        {featureCollection}
      </svg>
    );
  },
});
