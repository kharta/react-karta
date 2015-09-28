import React from "react";

export default React.createClass({
  contextTypes: {
    path: React.PropTypes.func.isRequired,
  },

  render() {
    const style = {
      fill: "none",
      strokeWidth: 1,
      stroke: this.props.stroke || "#000",
    };

    return (
      <path d={this.context.path(this.props.geoJSON)} style={style} />
    );
  },
});
