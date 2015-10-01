import React from "react";

export default React.createClass({
  contextTypes: {
    renderStroke: React.PropTypes.func.isRequired,
    paintContext: React.PropTypes.object,
  },

  componentDidUpdate() {
    this.context.renderStroke(this.props.geoJSON, "#fff");
  },

  render() {
    return null;
  },
});
