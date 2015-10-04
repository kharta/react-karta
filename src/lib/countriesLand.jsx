import React from "react";
import topojson from "topojson";
import Feature from "feature";

export default React.createClass({
  contextTypes: {
    data: React.PropTypes.object.isRequired,
  },

  getInitialState() {
    return { geoJSON: topojson.feature(this.context.data, this.context.data.objects.land) };
  },

  render() {
    return <Feature geoJSON={this.state.geoJSON} />;
  },
});
