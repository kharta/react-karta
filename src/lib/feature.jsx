import React from "react";

export default React.createClass({
  contextTypes: {
    renderPath: React.PropTypes.func.isRequired,
    paintContext: React.PropTypes.object,
  },

  componentDidUpdate() {
    this.context.renderPath(this.context.paintContext, this.props.geoJSON);
  },

  render() {
    return null;
  },
});
