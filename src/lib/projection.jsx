import React from "react";
import d3 from "d3";

export default React.createClass({
  propTypes: {
    children: React.PropTypes.node,
  },

  contextTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    path: React.PropTypes.func.isRequired,
  },

  childContextTypes: {
    projection: React.PropTypes.func.isRequired,
  },

  getInitialState() {
    return {
      // scale: 1,
      scale: (this.context.width + 1) / 2 / Math.PI,
    };
  },

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ scale: this.state.scale + 10 });
  //   }, 1000);
  // },

  getChildContext() {
    const width = this.context.width;
    const height = this.context.height;

    const projection = d3.geo.mercator()
        .scale(this.state.scale)
        .translate([width / 2, height / 2])
        .precision(0.1);

    this.context.path.projection(projection);

    return {
      projection,
    };
  },

  render() {
    return (
      <g>{this.props.children}</g>
    );
  },
});
