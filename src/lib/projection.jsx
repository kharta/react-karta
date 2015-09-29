import React from "react";
import ReactDOM from "react-dom";
import d3 from "d3";

const projection = d3.geo.orthographic()
  .scale(720 / 2.1)
  .translate([960 / 2, 720 / 2])
  .clipAngle(90)
  .precision(null);

let paintContext = null;


export default React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    rotation: React.PropTypes.number.isRequired,
    canvas: React.PropTypes.func.isRequired,
    children: React.PropTypes.node,
  },

  childContextTypes: {
    renderPath: React.PropTypes.func.isRequired,
    renderStroke: React.PropTypes.func.isRequired,
    paintContext: React.PropTypes.object,
  },

  getChildContext() {
    if (this.refs.canvas) {
      paintContext = ReactDOM.findDOMNode(this.refs.canvas).getContext("2d");
    }

    return {
      paintContext,
      renderPath: this.renderPath,
      renderStroke: this.renderStroke,
    };
  },

  componentWillUpdate() {
    if (paintContext) {
      paintContext.clearRect(0, 0, this.props.width, this.props.height);
    }
  },

  renderPath(context, toDraw) {
    projection.rotate([this.props.rotation, this.props.rotation]);
    const path = d3.geo.path().projection(projection).context(context);
    context.clearRect(0, 0, this.props.width, this.props.height);

    context.beginPath();
    path(toDraw);
    context.fillStyle = "#222";
    context.fill();
  },

  renderStroke(context, toDraw, color) {
    projection.rotate([this.props.rotation, this.props.rotation]);
    const path = d3.geo.path().projection(projection).context(context);

    context.beginPath();
    path(toDraw);
    context.lineWidth = 0.5;
    context.strokeStyle = color;
    context.stroke();
  },

  render() {
    return (
      <div>
        {React.createElement(this.props.canvas, {
          width: this.props.width,
          height: this.props.height,
          ref: "canvas",
        })}
        {this.props.children}
      </div>
    );
  },
});
