import React from "react";

export default React.createClass({
  contextTypes: {
    renderPath: React.PropTypes.func.isRequired,
    canvasContext: React.PropTypes.object,
  },

  render() {
    this.context.renderPath(this.context.canvasContext, this.props.geoJSON);
    return null;
    // const style = {
    //   fill: this.props.fill || "#333",
    //   stroke: "none",
    // };

    // return (
    //   <path d={this.context.path(this.props.geoJSON)} style={style} />
    // );
  },
});
