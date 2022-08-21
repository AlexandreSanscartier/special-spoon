import IMat from './IMat';
import IVec3D from './IVec3D';

export default interface IMat3D extends IMat {
  set m00(value: number);
  get m00(): number;
  set m01(value: number);
  get m01(): number;
  set m02(value: number);
  get m02(): number;
  set m10(value: number);
  get m10(): number;
  set m11(value: number);
  get m11(): number;
  set m12(value: number);
  get m12(): number;
  set m20(value: number);
  get m20(): number;
  set m21(value: number);
  get m21(): number;
  set m22(value: number);
  get m22(): number;
  multiply(mat: IMat3D): IMat3D;
  inverse(): IMat3D;
  extractVec3DColumnMajorOrder(index: number): IVec3D;
  extractVec3DRowMajorOrder(index: number): IVec3D;
}
