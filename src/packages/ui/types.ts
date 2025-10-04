import Token from "./constants";

export type Color = (typeof Token.colors)[keyof typeof Token.colors];
