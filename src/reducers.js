import {
  SET_ROTATION, INC_ROTATION, SET_PAINT_CONTEXT,
  REQUEST_DATA, RECEIVE_DATA
} from "./actions";

function projection(state = {rotation: [0, 0]}, action) {
  switch (action.type) {
    case SET_ROTATION:
      return Object.assign({}, state, {
        rotation: action.angle,
      });
    case INC_ROTATION:
      return Object.assign({}, state, {
        rotation: [state.rotation[0] + action.angle, state.rotation[1] + action.angle],
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
