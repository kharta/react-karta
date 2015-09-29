import React from "react";

export default React.createClass({
  contextTypes: {
    renderStroke: React.PropTypes.func.isRequired,
    paintContext: React.PropTypes.object,
  },

  componentDidUpdate() {
    this.context.renderStroke(this.context.paintContext, {type: "Sphere"}, "#000");
  },

  render() {
    return null;
  },
});
