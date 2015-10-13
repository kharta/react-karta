import {
  SET_ROTATION, INC_ROTATION, SET_PAINT_CONTEXT,
  REQUEST_DATA, RECEIVE_DATA, SET_SCALE_AND_TRANSLATE,
  START_INTERACTION, END_INTERACTION, REDRAW,
} from "./actions";

import d3 from "d3";

const initialProjection = {
  type: d3.geo.mercator,
  scale: 720 / 2,
  translate: [480, 360],
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

function path(state) {
  const p = state.projection;
  if (p) {
    // console.log(p.translate);
    const precisionMultiplier = state.interacting ? 1000000 : 100;
    // const precision = state.interacting ? null : 10000;
    const area = 1 / p.scale / p.scale * precisionMultiplier;
    const proj = p.type()
        .scale(p.scale)
        .translate(p.translate)
        .clipExtent(p.clipExtent)
        // .clipAngle(p.clipAngle)
        .precision(null)
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

function interacting(state = false, action) {
  switch (action.type) {
    case START_INTERACTION: return true;
    case END_INTERACTION: return false;
    default: return state;
  }
}

function redraw(state, action) {
  switch (action.type) {
    case REDRAW: return state;
    default: return state;
  }
}

export default function karta(state = {}, action) {
  return {
    projection: redraw(projection(state.projection, action), action),
    context: context(state.context, action),
    data: data(state.data, action),
    path: path(state),
    interacting: interacting(state.interacting, action),
  };
}
