import React from "react";

export default React.createClass({
  contextTypes: {
    renderPath: React.PropTypes.func.isRequired,
    paintContext: React.PropTypes.object,
  },

  shouldComponentUpdate() {
    return true;
  },

  componentDidUpdate() {
    this.context.renderPath(this.props.geoJSON);
  },

  componentDidMount() {
    this.context.renderPath(this.props.geoJSON);
  },

  render() {
    return null;
  },
});
