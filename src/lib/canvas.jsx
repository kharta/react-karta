import React from "react";

export default React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
  },

  shouldComponentUpdate() { return false; },

  render() {
    return <canvas width={this.props.width} height={this.props.height} />;
  },
});
