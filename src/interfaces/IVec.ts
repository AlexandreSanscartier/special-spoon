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
   * Gets the length of the vector (same as magnitude).
   */
  get length(): number;

  /**
   * Adds the current vector with the supplied vector.
   * @param vec the vector to add.
   */
  add(vec: IVec);

  /**
   * Subtracts the current vector with the supplied vector.
   * @param vec the vector to add.
   */
  subtract(vec: IVec);

  /**
   * Calculates the dot product with the supplied array.
   * @param vec the to multiply with.
   * @returns the dot product.
   */
  dot(vec: IVec): number;

  /**
   * Scales the 2D vector by the scale s
   * @param s the scale to use.
   */
  scale(s: number);

  /**
   * Calculates the euclidean distance between two vectors
   * @param vec the vector to calculate the distance from.
   */
  distance(vec: IVec): number;

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
