import React from "react";

export default React.createClass({
  contextTypes: {
    renderStroke: React.PropTypes.func.isRequired,
    paintContext: React.PropTypes.object,
  },

  shouldComponentUpdate() {
    return true;
  },

  componentDidUpdate() {
    this.context.renderStroke(this.props.geoJSON, "#fff");
  },

  componentDidMount() {
    this.context.renderStroke(this.props.geoJSON, "#fff");
  },

  render() {
    return null;
  },
});
