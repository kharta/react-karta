import React from "react";
import topojson from "topojson";
import Mesh from "mesh";

export default React.createClass({
  contextTypes: {
    data: React.PropTypes.object.isRequired,
  },

  render() {
    const geoJSON = topojson.mesh(this.context.data, this.context.data.objects.countries);
    return <Mesh geoJSON={geoJSON} />;
  },
});
