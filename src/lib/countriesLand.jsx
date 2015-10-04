import React from "react";
import topojson from "topojson";
import Feature from "feature";

export default React.createClass({
  contextTypes: {
    data: React.PropTypes.object.isRequired,
  },

  render() {
    const geoJSON = topojson.feature(this.context.data, this.context.data.objects.land);
    return <Feature geoJSON={geoJSON} />;
  },
});
