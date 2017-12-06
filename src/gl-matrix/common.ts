/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
export const EPSILON = 0.000001;
export let ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
export const RANDOM = Math.random;

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
export function setMatrixArrayType(type: any) {
  ARRAY_TYPE = type;
}

const degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
export function toRadian(a: number) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
export function equals(a: number, b: number) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}

type TypeTag<Tag> = {
  __TypeTag?: Tag;
};

export type vec2 = { [K in "0" | "1"]: number; } &
  TypeTag<"vec2"> &
  TypeTag<"imVec2">;

export type imVec2 = { readonly [K in "0" | "1"]: number; } &
  TypeTag<"imVec2">;

export type vec3 = { [K in "0" | "1" | "2"]: number; } &
  TypeTag<"vec3"> &
  TypeTag<"imVec3">;

export type imVec3 = { readonly [K in "0" | "1" | "2"]: number; } &
  TypeTag<"imVec3">;

export type vec4 = { [K in "0" | "1" | "2" | "3"]: number; } &
  TypeTag<"vec4"> &
  TypeTag<"imVec4">;

export type imVec4 = { readonly [K in "0" | "1" | "2" | "3"]: number; } &
  TypeTag<"imVec4">;

export type quat = { [K in "0" | "1" | "2" | "3"]: number; } &
  TypeTag<"quat"> &
  TypeTag<"imQuat">;

export type imQuat = { readonly [K in "0" | "1" | "2" | "3"]: number; } &
  TypeTag<"imQuat">;

export type mat2 = {
    [K in "0" | "1" | "2" | "3" ]: number;
  } &
  TypeTag<"mat2"> &
  TypeTag<"imMat2">;

export type imMat2 = {
    readonly [K in "0" | "1" | "2" | "3"]: number;
  } &
  TypeTag<"imMat2">;

export type mat2d = {
    [K in "0" | "1" | "2" | "3" | "4" | "5"]: number;
  } &
  TypeTag<"mat2d"> &
  TypeTag<"imMat2d">;

export type imMat2d = {
    readonly [K in "0" | "1" | "2" | "3" | "4" | "5"]: number;
  } &
  TypeTag<"imMat2d">;

export type mat3 = {
    [K in "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8"]: number;
  } &
  TypeTag<"mat3"> &
  TypeTag<"imMat3">;

export type imMat3 = {
    readonly [K in "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8"]: number;
  } &
  TypeTag<"imMat3">;

export type mat4 = {
    [K in "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15"]: number;
  } &
  TypeTag<"mat4"> &
  TypeTag<"imMat4">;

export type imMat4 = {
    readonly [K in "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15"]: number;
  } &
  TypeTag<"imMat4">;