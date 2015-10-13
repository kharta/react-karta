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
    drag: React.PropTypes.bool,
    zoom: React.PropTypes.bool,
  },

  childContextTypes: {
    renderPath: React.PropTypes.func.isRequired,
    renderStroke: React.PropTypes.func.isRequired,
    projection: React.PropTypes.func.isRequired,
  },

  getChildContext() {
    return {
      renderPath: this.renderPath,
      renderStroke: this.renderStroke,
      projection: this.makeProjection(this.props.projection),
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
          projection: this.makeProjection(this.props.projection),
          drag: this.props.drag,
          zoom: this.props.zoom,
          onSetScaleAndTranslate: this.props.onSetScaleAndTranslate,
          onStartInteraction: this.props.onStartInteraction,
          onEndInteraction: this.props.onEndInteraction,
          ref: "canvas",
        })}
        {this.props.context && React.createElement(this.props.renderer, {
          ref: "renderer",
          projection: this.makeProjection(this.props.projection),
          path: this.props.path,
          paintContext: this.props.context,
        })}
        {this.props.children}
      </div>
    );
  },
});
