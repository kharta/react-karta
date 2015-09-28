import React from "react";

export default React.createClass({
  contextTypes: {
    path: React.PropTypes.func.isRequired,
  },

  render() {
    const square = { "type": "FeatureCollection", "features": [ { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [ [ [ 41.4921875, -13.2399454992863 ], [ 9.4921875, 52.908902047770255 ], [ 116.3671875, 52.908902047770255 ], [ 116.3671875, -13.2399454992863 ], [ 9.4921875, -13.2399454992863 ] ] ] } } ] };
    return (
      <path d={this.context.path(square)} />
    );
  },
});
