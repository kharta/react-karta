import React from "react";
import worldURL from "file!data/world-110m.json";
import Feature from "feature";
import topojson from "topojson";
import { fetchData } from "../actions";

export default React.createClass({
  contextTypes: {
    store: React.PropTypes.object.isRequired,
    projection: React.PropTypes.func.isRequired,
  },

  childContextTypes: {
    data: React.PropTypes.object,
  },

  getChildContext() {
    return {
      data: this.props.data["world-110m"],
    };
  },

  componentDidMount() {
    this.context.store.dispatch(fetchData("world-110m", worldURL));
  },

  render() {
    const data = this.props.data["world-110m"];
    if (data) {
      return (
        <div>
          {this.props.children}
        </div>
      );
    } else {
      return null;
    }
  },
});
