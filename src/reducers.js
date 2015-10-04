import { SET_ROTATION, INC_ROTATION } from "./actions";

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

export default function karta(state = {}, action) {
  return {
    projection: projection(state.projection, action),
  };
}
