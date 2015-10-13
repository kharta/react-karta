import React from "react";

export default React.createClass({
  getInitialState() {
    return { geoJSON: topojson.mesh(this.context.data, this.context.data.objects.countries) };
  },

  render() {
    return <Mesh geoJSON={this.state.geoJSON} />;
  },
});
