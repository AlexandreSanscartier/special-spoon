export default interface IVec {
  /**
   * Gets whether the vector is a zero vector (0,0).
   */
  get isZeroVector(): boolean;

  /**
   * Gets the values of the vector.
   */
  get vector(): Float32Array;

  /**
   * Scales the 2D vector by the scale s
   * @param s the scale to use.
   * @returns a new Vec2D scaled by amount s.
   */
  scale(s: number): IVec;

  /**
   * Scales in place the 2D vector by the scale s
   * @param s the scale to use.
   */
  scaleInPlace(s: number): void;

  /**
   * Calculates the magnitude of the 2D vector.
   * @returns the magnitude of the vector.
   */
  magnitude(): number;

  /**
   * Normalizes the 2D Vector
   * @returns the normalized vector or the zero vector (0,0).
   */
  normalize(): IVec;

  /**
   * Gets a string representation of the vector (ex. vec2(1, 2))
   * @returns the string representation
   */
  toString(): string;

  /**
   * Clones the 2D vector.
   * @returns the cloned 2d vector.
   */
  clone(): IVec;
}
