import React from "react";

export default React.createClass({
  contextTypes: {
    path: React.PropTypes.func.isRequired,
  },

  render() {
    const style = {
      fill: this.props.fill || "#333",
      stroke: "none",
    };

    return (
      <path d={this.context.path(this.props.geoJSON)} style={style} />
    );
  },
});
