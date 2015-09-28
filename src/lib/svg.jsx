import React from "react";
import d3 from "d3";

export default React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    children: React.PropTypes.object,
  },

  childContextTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    path: React.PropTypes.func.isRequired,
  },

  getChildContext() {
    return {
      width: this.props.width,
      height: this.props.height,
      path: d3.geo.path(),
    };
  },

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        {this.props.children}
      </svg>
    );
  },
});
