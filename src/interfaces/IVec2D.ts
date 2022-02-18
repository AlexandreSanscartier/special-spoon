import IVec from './IVec';

export default interface IVec2D extends IVec {
  set x(value: number);
  get x(): number;
  set y(value: number);
  get y(): number;
}
