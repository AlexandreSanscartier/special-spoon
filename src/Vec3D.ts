import IVec3D from './interfaces/IVec3D';

export default class Vec3D implements IVec3D {
  private _vector3D: Float32Array;
  private _magnitude: number;
  private _vectorHasChanged = true;

  /**
   * Creates an instance of a two dimenstional vector.
   * @param x the x value.
   * @param y the y value.
   * @param z the z value.
   */
  public constructor(x: number, y: number, z: number) {
    this._vector3D = new Float32Array(3);
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * Gets whether the vector is a zero vector (0,0,0).
   */
  public get isZeroVector(): boolean {
    return this.x === 0 && this.y === 0 && this.z === 0;
  }

  /**
   * Gets the values of the vector.
   */
  public get value(): Float32Array {
    return this._vector3D;
  }

  /**
   * Gets the length of the vector (same as magnitude).
   */
  public get length(): number {
    return this.magnitude();
  }

  /**
   * Sets the x value.
   */
  public set x(value: number) {
    const isSame = value === this.x;
    this._vector3D[0] = value;
    if (!isSame) {
      this._vectorHasChanged = true;
    }
  }

  /**
   * Gets the x value.
   */
  public get x(): number {
    return this._vector3D[0];
  }

  /**
   * Sets the y value.
   */
  public set y(value: number) {
    const isSame = value === this.y;
    this._vector3D[1] = value;
    if (!isSame) {
      this._vectorHasChanged = true;
    }
  }

  /**
   * Gets the y value.
   */
  public get y(): number {
    return this._vector3D[1];
  }

  /**
   * Sets the z value.
   */
  public set z(value: number) {
    const isSame = value === this.z;
    this._vector3D[2] = value;
    if (!isSame) {
      this._vectorHasChanged = true;
    }
  }

  /**
   * Gets the z value.
   */
  public get z(): number {
    return this._vector3D[2];
  }

  /**
   * Sets the specific index to the specified value.
   * @param index the index to set the value at.
   * @param value the value to set at the index.
   */
  public set(index: number, value: number) {
    if (index === 0) {
      this.x = value;
    } else if (index === 1) {
      this.y = value;
    } else if (index === 2) {
      this.z = value;
    }
  }

  /**
   * Adds the current vector with the supplied vector.
   * @param vec the vector to add.
   */
  public add(vec: IVec3D) {
    this.x += vec.x;
    this.y += vec.y;
    this.z += vec.z;
  }

  /**
   * Subtracts the current vector with the supplied vector.
   * @param vec the vector to add.
   */
  public subtract(vec: IVec3D) {
    this.x -= vec.x;
    this.y -= vec.y;
    this.z -= vec.z;
  }

  /**
   * Calculates the dot product with the supplied array.
   * @param vec the to multiply with.
   * @returns the dot product.
   */
  public dot(vec: IVec3D): number {
    return this.x * vec.x + this.y * vec.y + this.z * vec.z;
  }

  /**
   * Scales the 3D vector by the scale s
   * @param s the scale to use.
   */
  public scale(s: number) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
  }

  /**
   * Calculates the euclidean distance between two vectors
   * @param vec the vector to calculate the distance from.
   */
  public distance(vec: IVec3D): number {
    const x = this.x - vec.x;
    const y = this.y - vec.y;
    const z = this.z - vec.z;
    return Math.sqrt(x * x + y * y + z * z);
  }

  /**
   * Calculates the magnitude of the 3D vector.
   * @returns the magnitude of the vector.
   */
  public magnitude(): number {
    if (this._vectorHasChanged) {
      const x = this.x;
      const y = this.y;
      const z = this.z;
      this._magnitude = Math.sqrt(x * x + y * y + z * z);
      this._vectorHasChanged = false;
    }
    return this._magnitude;
  }

  /**
   * Normalizes the 3D Vector
   * @returns the normalized vector or the zero vector (0,0,0).
   */
  public normalize(): IVec3D {
    const out = this.clone();

    if (!out.isZeroVector) {
      out.x = this.x / this.magnitude();
      out.y = this.y / this.magnitude();
      out.z = this.z / this.magnitude();
    }

    return out;
  }

  /**
   * Cross product of the current and supplied 3D vector.
   * @param vec the 3d vector to calculate the cross product with
   * @returns the cross product
   */
  public cross(vec: IVec3D): IVec3D {
    const x = this.y * vec.z - this.z * vec.y;
    const y = this.z * vec.x - this.x * vec.z;
    const z = this.x * vec.y - this.y * vec.x;
    const out = new Vec3D(x, y, z);
    return out;
  }

  /**
   * Gets a string representation of the vector (ex. vec3D(1, 2, 3))
   * @returns the string representation
   */
  public toString(): string {
    return `vec3D(${this.x}, ${this.y}, ${this.z})`;
  }

  /**
   * Clones the 3D vector.
   * @returns the cloned 3D vector.
   */
  public clone(): IVec3D {
    const out = new Vec3D(this.x, this.y, this.z);
    return out;
  }
}
