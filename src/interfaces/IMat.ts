export default interface IMat {
  get value(): Float32Array;
  get length(): number;
  get rows(): number;
  get cols(): number;
  add(mat: IMat): void;
  subtract(mat: IMat): void;
  multiply(mat: IMat): IMat;
  inverse(mat: IMat): IMat;
  determinant(): number;

  /**
   * Clones the matrix.
   * @returns the cloned matrix.
   */
  clone(): IMat;
}
