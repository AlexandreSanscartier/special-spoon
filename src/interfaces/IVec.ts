export default interface IVec {
  get isZeroVector(): boolean;
  get vector(): Float32Array;
  scale(s: number): IVec;
  scaleInPlace(s: number): void;
  magnitude(): number;
  normalize(): IVec;
  toString(): string;
  clone(): IVec;
}
