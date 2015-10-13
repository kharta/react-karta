import fetch from "isomorphic-fetch";

export const SET_ROTATION = "SET_ROTATION";
export const INC_ROTATION = "INC_ROTATION";
export const SET_PAINT_CONTEXT = "SET_PAINT_CONTEXT";
export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";
export const SET_SCALE_AND_TRANSLATE = "SET_SCALE_AND_TRANSLATE";

export function setRotation(angle) {
  return { type: SET_ROTATION, angle };
}

export function incRotation(angle) {
  return { type: INC_ROTATION, angle };
}

export function setPaintContext(context) {
  return { type: SET_PAINT_CONTEXT, context };
}

function requestData(key, filename) {
  return { type: REQUEST_DATA, key, filename };
}

function receiveData(key, json) {
  return { type: RECEIVE_DATA, key, json };
}

export function fetchData(key, filename) {
  return dispatch => {
    dispatch(requestData(key, filename));

    return fetch(filename)
      .then(response => response.json())
      .then(json => dispatch(receiveData(key, json)));
  };
}

export function setScaleAndTranslate(scale, translate) {
  return { type: SET_SCALE_AND_TRANSLATE, scale, translate };
}
