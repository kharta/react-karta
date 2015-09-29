import React from "react";
import axios from "axios";
import topojson from "topojson";
import worldURL from "file!data/world-50m.json";

import Feature from "feature";

export default React.createClass({
  getInitialState() {
    return {
      geoJSON: null,
    };
  },

  componentDidMount() {
    axios.get(worldURL)
      .then(({data: topo}) => {
        const geoJSON = topojson.feature(topo, topo.objects.land);
        this.setState({ geoJSON });
      });
  },

  render() {
    if (this.state.geoJSON) {
      return <Feature geoJSON={this.state.geoJSON} />;
    } else {
      return null;
    }
  },
});
