import {
  SET_ROTATION, INC_ROTATION, SET_PAINT_CONTEXT,
  REQUEST_DATA, RECEIVE_DATA
} from "./actions";

import d3 from "d3";

const initialProjection = {
  type: d3.geo.orthographic,
  scale: 720 / 2.1,
  translate: [960 / 2, 720 / 2],
  clipAngle: 90,
  precision: null,
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

export default function karta(state = {}, action) {
  return {
    projection: projection(state.projection, action),
    context: context(state.context, action),
    data: data(state.data, action),
  };
}
