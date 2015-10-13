import React from "react";
import worldURL from "file!data/world-50m.json";
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
      data: this.props.data["world-50m"],
    };
  },

  componentDidMount() {
    this.context.store.dispatch(fetchData("world-50m", worldURL));
  },

  render() {
    const data = this.props.data["world-50m"];
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
