import React from "react";
import ReactDOM from "react-dom";
import d3 from "d3";

export default React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    rotation: React.PropTypes.array.isRequired,
    canvas: React.PropTypes.func.isRequired,
    renderer: React.PropTypes.func.isRequired,
    children: React.PropTypes.node,
  },

  childContextTypes: {
    renderPath: React.PropTypes.func.isRequired,
    renderStroke: React.PropTypes.func.isRequired,
  },

  getChildContext() {
    return {
      renderPath: this.renderPath,
      renderStroke: this.renderStroke,
    };
  },

  componentWillReceiveProps(newProps) {
    if (newProps.rotation !== this.props.rotation) {
      this.state.projection.rotate(newProps.rotation);
    }
  },

  getInitialState() {
    const projection = d3.geo.orthographic()
      .scale(720 / 2.1)
      .translate([960 / 2, 720 / 2])
      .clipAngle(90)
      .precision(null);

    return {
      projection,
    };
  },

  componentWillUpdate() {
    this.refs.renderer && this.refs.renderer.clear();
  },

  renderPath(data, color) {
    this.refs.renderer && this.refs.renderer.fill(data, color);
  },

  renderStroke(data, color) {
    this.refs.renderer && this.refs.renderer.stroke(data, color);
  },

  render() {
    return (
      <div>
        {React.createElement(this.props.canvas, {
          width: this.props.width,
          height: this.props.height,
          onPaintContext: this.props.onPaintContext,
          ref: "canvas",
        })}
        {this.props.context && React.createElement(this.props.renderer, {
          ref: "renderer",
          projection: this.state.projection,
          paintContext: this.props.context,
        })}
        {this.props.children}
      </div>
    );
  },
});
