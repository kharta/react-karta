import React from "react";
import ReactDOM from "react-dom";

export default React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
  },

  componentDidMount() {
    const context = ReactDOM.findDOMNode(this).getContext("2d");
    this.props.onPaintContext(context);
  },

  shouldComponentUpdate() { return false; },

  render() {
    return <canvas width={this.props.width} height={this.props.height} />;
  },
});
