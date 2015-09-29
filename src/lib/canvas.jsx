import React from "react";
import d3 from "d3";

export default React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    children: React.PropTypes.object,
    path: React.PropTypes.func.isRequired,
  },

  childContextTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    path: React.PropTypes.func.isRequired,
    renderPath: React.PropTypes.func.isRequired,
    canvasContext: React.PropTypes.object,
  },

  getDefaultProps() {
    return { path: d3.geo.path() };
  },

  getChildContext() {
    return {
      width: this.props.width,
      height: this.props.height,
      path: this.props.path,
      renderPath: this.renderPath,
      canvasContext: this.refs.canvas && this.refs.canvas.getContext("2d"),
    };
  },

  renderPath(context, toDraw) {
    debugger;
    if (context) {
      // const context = this.refs.canvas.getContext("2d");
      const path = this.props.path.context(context);

      context.clearRect(0, 0, this.props.width, this.props.height);

      path(toDraw);
      context.fillStyle = "#222";
      context.fill();
    }
  },

  render() {
    return (
      <canvas width={this.props.width} height={this.props.height} ref="canvas">
        {this.props.children}
      </canvas>
    );
  },
});
