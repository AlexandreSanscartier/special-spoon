import IMat3D from './interfaces/IMat3D';
import IVec3D from './interfaces/IVec3D';
import Vec3D from './Vec3D';

/**
 * Class the defines a 3D matrix
 * The matrix is represented by the following indexes in the Float32Array:
 * [0, 1, 2]
 * [3, 4, 5]
 * [6, 7, 8]
 */
export default class Mat3D implements IMat3D {
  private _mat3D: Float32Array;
  private _cols = 3;
  private _rows = 3;

  public constructor() {
    this._mat3D = new Float32Array(9);
  }

  public get value() {
    return this._mat3D;
  }

  public get length(): number {
    return this._mat3D.length;
  }

  public get cols(): number {
    return this._cols;
  }

  public get rows(): number {
    return this._rows;
  }

  public set m00(value: number) {
    this._mat3D[0] = value;
  }

  public get m00(): number {
    return this._mat3D[0];
  }

  public set m01(value: number) {
    this._mat3D[1] = value;
  }

  public get m01(): number {
    return this._mat3D[1];
  }

  public set m02(value: number) {
    this._mat3D[2] = value;
  }

  public get m02(): number {
    return this._mat3D[2];
  }

  public set m10(value: number) {
    this._mat3D[3] = value;
  }

  public get m10(): number {
    return this._mat3D[3];
  }

  public set m11(value: number) {
    this._mat3D[4] = value;
  }

  public get m11(): number {
    return this._mat3D[4];
  }

  public set m12(value: number) {
    this._mat3D[5] = value;
  }

  public get m12(): number {
    return this._mat3D[5];
  }

  public set m20(value: number) {
    this._mat3D[6] = value;
  }

  public get m20(): number {
    return this._mat3D[6];
  }

  public set m21(value: number) {
    this._mat3D[7] = value;
  }

  public get m21(): number {
    return this._mat3D[7];
  }

  public set m22(value: number) {
    this._mat3D[8] = value;
  }

  public get m22(): number {
    return this._mat3D[8];
  }

  add(mat3D: IMat3D) {
    this.m00 += mat3D.m00;
    this.m01 += mat3D.m01;
    this.m02 += mat3D.m02;
    this.m10 += mat3D.m10;
    this.m11 += mat3D.m11;
    this.m12 += mat3D.m12;
    this.m20 += mat3D.m20;
    this.m21 += mat3D.m21;
    this.m22 += mat3D.m22;
  }

  subtract(mat3D: IMat3D) {
    this.m00 -= mat3D.m00;
    this.m01 -= mat3D.m01;
    this.m02 -= mat3D.m02;
    this.m10 -= mat3D.m10;
    this.m11 -= mat3D.m11;
    this.m12 -= mat3D.m12;
    this.m20 -= mat3D.m20;
    this.m21 -= mat3D.m21;
    this.m22 -= mat3D.m22;
  }

  multiply(mat: IMat3D): IMat3D {
    const m00 = this.m00 * mat.m00 + this.m01 * mat.m10 + this.m02 * mat.m20;
    const m01 = this.m00 * mat.m01 + this.m01 * mat.m11 + this.m02 * mat.m21;
    const m02 = this.m00 * mat.m02 + this.m01 * mat.m12 + this.m02 * mat.m22;
    const m10 = this.m10 * mat.m00 + this.m11 * mat.m10 + this.m12 * mat.m20;
    const m11 = this.m10 * mat.m01 + this.m11 * mat.m11 + this.m12 * mat.m21;
    const m12 = this.m10 * mat.m02 + this.m11 * mat.m12 + this.m12 * mat.m22;
    const m20 = this.m20 * mat.m00 + this.m21 * mat.m10 + this.m22 * mat.m20;
    const m21 = this.m20 * mat.m01 + this.m21 * mat.m11 + this.m22 * mat.m21;
    const m22 = this.m20 * mat.m02 + this.m21 * mat.m12 + this.m22 * mat.m22;
    return Mat3D.fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22);
  }

  determinant(): number {
    const out =
      this.m00 * (this.m22 * this.m11 - this.m12 * this.m21) +
      this.m01 * (-this.m22 * this.m10 + this.m12 * this.m20) +
      this.m02 * (this.m21 * this.m10 - this.m11 * this.m20);
    return out;
  }

  inverse(): IMat3D {
    const a = this.extractVec3DColumnMajorOrder(0);
    const b = this.extractVec3DColumnMajorOrder(1);
    const c = this.extractVec3DColumnMajorOrder(2);

    const r0 = b.cross(c);
    const r1 = c.cross(a);
    const r2 = a.cross(b);

    const invDet = 1.0 / r2.dot(c);

    const m00 = r0.x * invDet;
    const m01 = r0.y * invDet;
    const m02 = r0.z * invDet;
    const m10 = r1.x * invDet;
    const m11 = r1.y * invDet;
    const m12 = r1.z * invDet;
    const m20 = r2.x * invDet;
    const m21 = r2.y * invDet;
    const m22 = r2.z * invDet;

    return Mat3D.fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22);
  }

  /**
   * Extracts the 3D vector in column major order.
   * @param index the index to get the 3D vector for.
   * @returns the 3D vector for the supplied index in column major order.
   */
  extractVec3DColumnMajorOrder(index: number): IVec3D {
    let out: IVec3D;
    if (index === 0) {
      out = new Vec3D(this.m00, this.m10, this.m20);
    } else if (index === 1) {
      out = new Vec3D(this.m01, this.m11, this.m21);
    } else if (index === 2) {
      out = new Vec3D(this.m02, this.m12, this.m22);
    }
    return out;
  }

  /**
   * Extracts the 3D vector in row major order.
   * @param index the index to get the 3D vector for.
   * @returns the 3D vector for the supplied index in row major order.
   */
  extractVec3DRowMajorOrder(index: number): IVec3D {
    let out: IVec3D;
    if (index === 0) {
      out = new Vec3D(this.m00, this.m01, this.m02);
    } else if (index === 1) {
      out = new Vec3D(this.m10, this.m11, this.m12);
    } else if (index === 2) {
      out = new Vec3D(this.m20, this.m21, this.m22);
    }
    return out;
  }

  /**
   * Clones the 3D Matrix.
   * @returns the cloned 3D matrix.
   */
  clone(): IMat3D {
    const out = Mat3D.fromValues(
      this.m00,
      this.m01,
      this.m02,
      this.m10,
      this.m11,
      this.m12,
      this.m20,
      this.m21,
      this.m22
    );
    return out;
  }

  /**
   * Gets a string representation of the matrix ex.
   * [0, 1, 2]
   * [3, 4, 5]
   * [6, 7, 8]
   * Mat3D(0, 1, 2, 3, 4, 5, 6, 7, 8)
   * @returns the string representation
   */
  public toString(): string {
    return `Mat3D(${this.m00}, ${this.m01}, ${this.m02}, ${this.m10}, ${this.m11}, ${this.m12}, ${this.m20}, ${this.m21}, ${this.m22})`;
  }

  static fromValues(
    n00: number,
    n01: number,
    n02: number,
    n10: number,
    n11: number,
    n12: number,
    n20: number,
    n21: number,
    n22: number
  ): IMat3D {
    const out = new Mat3D();
    out.m00 = n00;
    out.m01 = n01;
    out.m02 = n02;
    out.m10 = n10;
    out.m11 = n11;
    out.m12 = n12;
    out.m20 = n20;
    out.m21 = n21;
    out.m22 = n22;
    return out;
  }

  /**
   * Returns the matrix rotation with the given x angle in radians
   * @param angle angle in radians.
   * @returns the X rotation matrix.
   */
  static makeRotationX(angle: number): IMat3D {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    return Mat3D.fromValues(1.0, 0.0, 0.0, 0.0, cos, -sin, 0.0, sin, cos);
  }

  /**
   * Returns the matrix rotation with the given y angle in radians
   * @param angle angle in radians.
   * @returns the Y rotation matrix.
   */
  static makeRotationY(angle: number): IMat3D {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    return Mat3D.fromValues(cos, 0.0, sin, 0.0, 1.0, 0.0, -sin, 0.0, cos);
  }

  /**
   * Returns the matrix rotation with the given z angle in radians
   * @param angle angle in radians.
   * @returns the Z rotation matrix.
   */
  static makeRotationZ(angle: number): IMat3D {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    return Mat3D.fromValues(cos, -sin, 0.0, sin, cos, 0.0, 0.0, 0.0, 1.0);
  }

  /**
   * Returns the matrix rotation with the given angle in radians and rotation vector.
   * @param angle angle in radians.
   * @param vec3D the vector to rotate around
   * @returns the rotation matrix.
   */
  static MakeRotation(angle: number, vec3D: IVec3D): IMat3D {
    const unitVector = vec3D.normalize() as IVec3D;

    const c = Math.cos(angle);
    const s = Math.sin(angle);
    const d = 1.0 - c;

    const x = unitVector.x * d;
    const y = unitVector.y * d;
    const z = unitVector.z * d;

    const vxvy = x * unitVector.y;
    const vxvz = x * unitVector.z;
    const vyvz = y * unitVector.z;

    const x1 = c + x * unitVector.x;
    const x2 = vxvy - s * unitVector.z;
    const x3 = vxvz + s * unitVector.y;

    const y1 = vxvy + s * unitVector.z;
    const y2 = c + y * unitVector.y;
    const y3 = vyvz - s * unitVector.x;

    const z1 = vxvz - s * unitVector.y;
    const z2 = vyvz + s * unitVector.x;
    const z3 = c + z * unitVector.z;

    return Mat3D.fromValues(x1, x2, x3, y1, y2, y3, z1, z2, z3);
  }

  /**
   * Reflects the plan perpendicular to the 3D Vector.
   * @param vec3D the vector to reflect on.
   * @return the reflection matrix.
   */
  static MakeReflection(vec3D: IVec3D): IMat3D {
    const unitVector = vec3D.normalize() as IVec3D;

    const x = unitVector.x * -2.0;
    const y = unitVector.y * -2.0;
    const z = unitVector.z * -2.0;

    const vxvy = x * unitVector.y;
    const vxvz = x * unitVector.z;
    const vyvz = y * unitVector.z;

    const x1 = x * unitVector.x + 1;
    const x2 = vxvy;
    const x3 = vxvz;

    const y1 = vxvy;
    const y2 = y * unitVector.y + 1;
    const y3 = vyvz;

    const z1 = vxvz;
    const z2 = vyvz;
    const z3 = z * unitVector.z + 1;

    return Mat3D.fromValues(x1, x2, x3, y1, y2, y3, z1, z2, z3);
  }

  static fromRowMajorOrderVec3Ds(a: IVec3D, b: IVec3D, c: IVec3D): IMat3D {
    const out = new Mat3D();
    out.m00 = a.x;
    out.m01 = a.y;
    out.m02 = a.z;
    out.m10 = b.x;
    out.m11 = b.y;
    out.m12 = b.z;
    out.m20 = c.x;
    out.m21 = c.y;
    out.m22 = c.z;
    return out;
  }

  static fromColumnMajorOrderVec3Ds(a: IVec3D, b: IVec3D, c: IVec3D): IMat3D {
    const out = new Mat3D();
    out.m00 = a.x;
    out.m10 = a.y;
    out.m20 = a.z;
    out.m01 = b.x;
    out.m11 = b.y;
    out.m21 = b.z;
    out.m02 = c.x;
    out.m12 = c.y;
    out.m22 = c.z;
    return out;
  }

  static identity() {
    const out = new Mat3D();
    out.m00 = 1;
    out.m01 = 0;
    out.m02 = 0;
    out.m10 = 0;
    out.m11 = 1;
    out.m12 = 0;
    out.m20 = 0;
    out.m21 = 0;
    out.m22 = 1;
    return out;
  }
}
