import IVec2D from './IVec2D';

export default interface IVec3D extends IVec2D {
  /**
   * Sets the z value.
   */
  set z(value: number);

  /**
   * Gets the z value.
   */
  get z(): number;
}
