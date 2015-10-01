import React from "react";
import ReactDOM from "react-dom";

export default React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
  },

  componentDidMount() {
    this.props.connectPaintContext(ReactDOM.findDOMNode(this).getContext("2d"));
  },

  shouldComponentUpdate() { return false; },

  render() {
    return <canvas width={this.props.width} height={this.props.height} />;
  },
});
