
import { vec3, imVec3, vec2, imVec2, quat, imQuat, mat4, imMat3, mat2d } from "./src/gl-matrix";

const v0 = vec3.create();
const iv0: imVec3 = vec3.create();

const v1: vec3 = [1, 2, 3];

const v2 = vec2.create();

const dotval = vec3.dot(v0, iv0);

vec3.add(v0, iv0, v1);

const m33 = mat4.create();