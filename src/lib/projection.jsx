import React from "react";
import ReactDOM from "react-dom";
import d3 from "d3";

export default React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
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

  componentWillUpdate() {
    this.refs.renderer && this.refs.renderer.clear();
  },

  renderPath(data, color) {
    this.refs.renderer && this.refs.renderer.fill(data, color);
  },

  renderStroke(data, color) {
    this.refs.renderer && this.refs.renderer.stroke(data, color);
  },

  makeProjection(projectionData) {
    return projectionData.type()
    .scale(projectionData.scale)
    .translate(projectionData.translate)
    .clipAngle(projectionData.clipAngle)
    .precision(projectionData.precision)
    .rotate(projectionData.rotate);
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
          projection: this.makeProjection(this.props.projection),
          paintContext: this.props.context,
        })}
        {this.props.children}
      </div>
    );
  },
});
