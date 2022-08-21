import IVec from './interfaces/IVec';

export default class Vector implements IVec {
  private _vector: Float32Array;
  private _vectorHasChanged = true;
  private _magnitude: number;

  public constructor(vector: Float32Array) {
    this._vector = vector;
  }

  get isZeroVector(): boolean {
    return this.value.every((item) => item === 0);
  }

  get value(): Float32Array {
    return this._vector;
  }

  get length(): number {
    return this.magnitude();
  }

  set(index: number, value: number) {
    if (index >= this.value.length) {
      throw new Error(
        `Index ${index} is out of bounds of vector length ${this.value.length}`
      );
    }
    const isSame = value === this.value[index];
    this.value[index] = value;
    if (!isSame) {
      this._vectorHasChanged = true;
    }
  }

  add(vec: IVec) {
    if (this.value.length !== vec.value.length)
      throw new Error(
        `Vector lengths are not equal ${this.value.length}(this) ${vec.value.length}(vec)`
      );
    for (let i = 0; i < this.value.length; i++) {
      this.value[i] += vec.value[i];
    }
  }

  subtract(vec: IVec) {
    if (this.value.length !== vec.value.length)
      throw new Error(
        `Vector lengths are not equal ${this.value.length}(this) ${vec.value.length}(vec)`
      );
    for (let i = 0; i < this.value.length; i++) {
      this.value[i] -= vec.value[i];
    }
  }

  dot(vec: IVec): number {
    if (this.value.length !== vec.value.length)
      throw new Error(
        `Vector lengths are not equal ${this.value.length}(this) ${vec.value.length}(vec)`
      );
    let rollingSum = 0;
    for (let i = 0; i < this.value.length; i++) {
      rollingSum += this.value[i] * vec.value[i];
    }
    return rollingSum;
  }

  scale(s: number) {
    for (let i = 0; i < this.value.length; i++) {
      this.value[i] *= s;
    }
  }

  distance(vec: IVec): number {
    if (this.value.length !== vec.value.length)
      throw new Error(
        `Vector lengths are not equal ${this.value.length}(this) ${vec.value.length}(vec)`
      );
    let rollingSum = 0;
    for (let i = 0; i < this.value.length; i++) {
      const componentSubtractionResult = this.value[i] - vec.value[i];
      rollingSum += componentSubtractionResult * componentSubtractionResult;
    }
    return Math.sqrt(rollingSum);
  }

  magnitude(): number {
    if (this._vectorHasChanged) {
      let rollingSum = 0;
      for (let i = 0; i < this.value.length; i++) {
        rollingSum += this.value[i] * this.value[i];
      }
      this._magnitude = Math.sqrt(rollingSum);
      this._vectorHasChanged = false;
    }
    return this._magnitude;
  }

  normalize(): IVec {
    const out = this.clone();

    if (!out.isZeroVector) {
      const magnitude = out.magnitude();
      for (let i = 0; i < out.value.length; i++) {
        out.value[i] /= magnitude;
      }
    }

    return out;
  }

  toString(): string {
    const stringRepresentation = `vec(${this.value.join(', ')})`;
    return stringRepresentation;
  }

  clone(): IVec {
    const out = new Vector(this.value.slice(0));
    return out;
  }
}
