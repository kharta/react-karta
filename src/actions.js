import fetch from "isomorphic-fetch";

export const SET_ROTATION = "SET_ROTATION";
export const INC_ROTATION = "INC_ROTATION";
export const SET_PAINT_CONTEXT = "SET_PAINT_CONTEXT";
export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";
export const SET_SCALE_AND_TRANSLATE = "SET_SCALE_AND_TRANSLATE";
export const START_INTERACTION = "START_INTERACTION";
export const END_INTERACTION = "END_INTERACTION";
export const REDRAW = "REDRAW";

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

export function startInteraction() {
  return { type: START_INTERACTION };
}

function signalEndInteraction() {
  return { type: END_INTERACTION };
}

function redraw() {
  return { type: REDRAW };
}

export function endInteraction() {
  return dispatch => {
    dispatch(signalEndInteraction());
    dispatch(redraw());
  };
}

