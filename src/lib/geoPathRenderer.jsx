import React from "react";
import d3 from "d3";

export default React.createClass({
  propTypes: {
    paintContext: React.PropTypes.object.isRequired,
    projection: React.PropTypes.func.isRequired,
  },

  render() { return null; },

  clear() {
    const ctx = this.props.paintContext;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  },

  stroke(data, color) {
    const ctx = this.props.paintContext;
    const projection = this.props.projection;
    const path = d3.geo.path()
      .projection(projection)
      .context(ctx);

    ctx.beginPath();
    path(data);
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = color;
    ctx.stroke();
  },

  fill(data, color) {
    const ctx = this.props.paintContext;
    const projection = this.props.projection;
    const path = d3.geo.path()
      .projection(projection)
      .context(ctx);

    ctx.beginPath();
    path(data);
    ctx.fillStyle = color;
    ctx.fill();
  },
});
