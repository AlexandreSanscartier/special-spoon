import IVec2D from './interfaces/IVec2D';

export default class Vec2D implements IVec2D {
  private _vector2D: Float32Array;
  private _magnitude: number;
  private _vectorHasChanged = true;

  /**
   * Creates an instance of a two dimenstional vector.
   * @param x the x value.
   * @param y the y value.
   */
  public constructor(x: number, y: number) {
    this._vector2D = new Float32Array(2);
    this.x = x;
    this.y = y;
  }

  /**
   * Gets whether the vector is a zero vector (0,0).
   */
  public get isZeroVector() {
    return this.x === 0 && this.y === 0;
  }

  /**
   * Gets the values of the vector.
   */
  public get value() {
    return this._vector2D;
  }

  /**
   * Gets the length of the vector (same as magnitude).
   */
  public get length() {
    return this.magnitude();
  }

  /**
   * Sets the x value.
   */
  public set x(value) {
    const isSame = value === this.x;
    this._vector2D[0] = value;
    if (!isSame) {
      this._vectorHasChanged = true;
    }
  }

  /**
   * Gets the x value.
   */
  public get x() {
    return this._vector2D[0];
  }

  /**
   * Sets the y value.
   */
  public set y(value) {
    const isSame = value === this.y;
    this._vector2D[1] = value;
    if (!isSame) {
      this._vectorHasChanged = true;
    }
  }

  /**
   * Gets the y value.
   */
  public get y() {
    return this._vector2D[1];
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
    }
  }

  /**
   * Adds the current vector with the supplied vector.
   * @param vec the vector to add.
   */
  public add(vec: IVec2D) {
    this.x += vec.x;
    this.y += vec.y;
  }

  /**
   * Subtracts the current vector with the supplied vector.
   * @param vec the vector to add.
   */
  public subtract(vec: IVec2D) {
    this.x -= vec.x;
    this.y -= vec.y;
  }

  /**
   * Calculates the dot product with the supplied array.
   * @param vec the to multiply with.
   * @returns the dot product.
   */
  public dot(vec: IVec2D) {
    return this.x * vec.x + this.y * vec.y;
  }

  /**
   * Scales the 2D vector by the scale s
   * @param s the scale to use.
   */
  public scale(s: number) {
    this.x *= s;
    this.y *= s;
  }

  /**
   * Calculates the euclidean distance between two vectors
   * @param vec the vector to calculate the distance from.
   */
  public distance(vec: IVec2D): number {
    const x = this.x - vec.x;
    const y = this.y - vec.y;
    return Math.sqrt(x * x + y * y);
  }

  /**
   * Calculates the magnitude of the 2D vector.
   * @returns the magnitude of the vector.
   */
  public magnitude(): number {
    if (this._vectorHasChanged) {
      this._magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
      this._vectorHasChanged = false;
    }
    return this._magnitude;
  }

  /**
   * Normalizes the 2D Vector
   * @returns the normalized vector or the zero vector (0,0).
   */
  public normalize(): IVec2D {
    const out = this.clone();

    if (!out.isZeroVector) {
      out.x = this.x / this.magnitude();
      out.y = this.y / this.magnitude();
    }

    return out;
  }

  /**
   * Gets a string representation of the vector (ex. vec2D(1, 2))
   * @returns the string representation
   */
  public toString(): string {
    return `vec2D(${this.x}, ${this.y})`;
  }

  /**
   * Clones the 2D vector.
   * @returns the cloned 2d vector.
   */
  public clone(): IVec2D {
    const out = new Vec2D(this.x, this.y);
    return out;
  }
}
