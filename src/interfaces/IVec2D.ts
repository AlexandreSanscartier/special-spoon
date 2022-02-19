import IVec from './IVec';

export default interface IVec2D extends IVec {
  /**
   * Sets the x value.
   */
  set x(value: number);

  /**
   * Gets the x value.
   */
  get x(): number;

  /**
   * Sets the y value.
   */
  set y(value: number);

  /**
   * Gets the y value.
   */
  get y(): number;
}
