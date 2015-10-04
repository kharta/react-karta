import React from "react";
import axios from "axios";
import topojson from "topojson";
import worldURL from "file!data/world-110m.json";
import { incRotation } from "../actions";

import Mesh from "mesh";

export default React.createClass({
  getInitialState() {
    return {
      geoJSON: null,
    };
  },

  contextTypes: {
    store: React.PropTypes.object,
  },

  componentDidMount() {
    axios.get(worldURL)
      .then(({data: world}) => {
        const geoJSON = topojson.mesh(world, world.objects.countries);
        this.setState({ geoJSON });
      });
  },

  render() {
    if (this.state.geoJSON) {
      return <Mesh geoJSON={this.state.geoJSON} {...this.props} />;
    } else {
      return null;
    }
  },
});
