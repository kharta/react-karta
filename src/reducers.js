import {
  SET_ROTATION, INC_ROTATION, SET_PAINT_CONTEXT,
  REQUEST_DATA, RECEIVE_DATA, SET_SCALE_AND_TRANSLATE,
} from "./actions";

import d3 from "d3";

const initialProjection = {
  type: d3.geo.mercator,
  scale: 720 / 2,
  translate: [0, 0],
  clipExtent: [[0, 0], [960, 720]],
  // clipAngle: 90,
  precision: 0,
  rotate: [0, 0],
};

function projection(state = initialProjection, action) {
  switch (action.type) {
    case SET_ROTATION:
      return Object.assign({}, state, {
        rotate: action.angle,
      });
    case INC_ROTATION:
      return Object.assign({}, state, {
        rotate: [state.rotate[0] + action.angle, state.rotate[1] + action.angle],
      });
    case SET_SCALE_AND_TRANSLATE:
      return Object.assign({}, state, {
        scale: action.scale,
        translate: action.translate,
      });
    default:
      return state;
  }
}

function context(state = null, action) {
  switch (action.type) {
    case SET_PAINT_CONTEXT:
      return action.context;
    default:
      return state;
  }
}

function data(state = {}, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        [action.key]: null,
      });
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        [action.key]: action.json,
      });
    default:
      return state;
  }
}

function path(p) {
  if (p) {
    console.log(p.translate);
    const area = 1 / p.scale / p.scale * 100000;
    const proj = p.type()
        .scale(p.scale)
        .translate(p.translate)
        .clipExtent(p.clipExtent)
        // .clipAngle(p.clipAngle)
        .precision(area)
        .rotate(p.rotate);

    console.log(area);
    // debugger
    const simplify = d3.geo.transform({
      point: function stream(x, y, z) {
        if (z >= area) this.stream.point(x, y);
      },
    });

    return d3.geo.path()
        .projection({stream: s => simplify.stream(proj.stream(s))});
  }
}

export default function karta(state = {}, action) {
  return {
    projection: projection(state.projection, action),
    context: context(state.context, action),
    data: data(state.data, action),
    path: path(state.projection),
  };
}
