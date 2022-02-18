import IVec2D from './interfaces/IVec2D';

export default class Vec2D implements IVec2D {
  private _vector2D: Float32Array;
  private _magnitude: number;

  private _mustRecalculateMagnitude = true;

  /**
   * Creates an instance of a two dimenstional vector.
   * @param x the x value.
   * @param y the y value.
   */
  public constructor(x: number, y: number) {
    this._vector2D = new Float32Array(2);
    this._vector2D[0] = x;
    this._vector2D[1] = y;
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
  public get vector() {
    return this._vector2D;
  }

  /**
   * Sets the x value.
   */
  public set x(value) {
    const isSame = value === this.x;
    this._vector2D[0] = value;
    if (!isSame) {
      this._mustRecalculateMagnitude = true;
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
      this._mustRecalculateMagnitude = true;
    }
  }

  /**
   * Gets the y value.
   */
  public get y() {
    return this._vector2D[1];
  }

  /**
   * Scales the 2D vector by the scale s
   * @param s the scale to use.
   * @returns a new Vec2D scaled by amount s.
   */
  public scale(s: number): IVec2D {
    return new Vec2D(this.x * s, this.y * 2);
  }

  /**
   * Scales in place the 2D vector by the scale s
   * @param s the scale to use.
   */
  public scaleInPlace(s: number) {
    this.x = this.x * s;
    this.y = this.y * s;
    this._mustRecalculateMagnitude = true;
  }

  /**
   * Calculates the magnitude of the 2D vector.
   * @returns the magnitude of the vector.
   */
  public magnitude(): number {
    if (this._mustRecalculateMagnitude) {
      this._magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
      this._mustRecalculateMagnitude = false;
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
   * Gets a string representation of the vector (ex. vec2(1, 2))
   * @returns the string representation
   */
  public toString(): string {
    return `vec2(${this.x}, ${this.y})`;
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
