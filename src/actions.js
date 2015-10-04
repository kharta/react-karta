export const SET_ROTATION = "SET_ROTATION";
export const INC_ROTATION = "INC_ROTATION";

export function setRotation(angle) {
  return { type: SET_ROTATION, angle };
}

export function incRotation(angle) {
  return { type: INC_ROTATION, angle };
}
