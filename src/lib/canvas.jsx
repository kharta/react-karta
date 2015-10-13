import React from "react";
import ReactDOM from "react-dom";
import d3 from "d3";

export default React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
  },

  scale: 360,

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    const context = node.getContext("2d");
    this.props.onPaintContext(context);

    const canvas = d3.select(node);
    this.zoom = d3.behavior.zoom()
      .size([this.props.width, this.props.height])
      .scaleExtent([20, 1000])
      .on("zoom", this.zoomed)
      .translate([this.props.width / 2, this.props.height / 2])
      .scale(this.scale);

    canvas.call(this.zoom);
  },

  zoomed(d) {
    this.scale = this.zoom.scale();
    this.props.onSetScaleAndTranslate(this.scale, this.zoom.translate());
  },


  shouldComponentUpdate() { return false; },

  render() {
    return <canvas width={this.props.width} height={this.props.height} />;
  },
});
