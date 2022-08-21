import IMat from './interfaces/IMat';

export default class Matrix implements IMat {
  private _matrix: Float32Array;
  private _rows: number;
  private _cols: number;

  constructor(rows: number, cols: number) {
    this._rows = rows;
    this._cols = cols;
    this._matrix = new Float32Array(rows * cols);
  }

  public get value(): Float32Array {
    return this._matrix;
  }

  public get length(): number {
    return this._matrix.length;
  }

  public get rows(): number {
    return this._rows;
  }

  public get cols(): number {
    return this._cols;
  }

  determinant(): number {
    throw new Error('Method determinant is not implemented');
  }

  multiply(): IMat {
    throw new Error('Method multiply is not implemented');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  inverse(mat: IMat): IMat {
    throw new Error('Method inverse is not implemented');
  }

  add(mat: IMat): void {
    if (this.rows !== mat.rows || this.cols !== mat.cols) {
      throw new Error(
        `Can not perform addition of matrix[${this.rows},${this.cols}](this) with matrix[${mat.rows},${mat.cols}](mat)`
      );
    }

    for (let i = 0; i < this.length; i++) {
      this.value[i] += mat[i];
    }
  }

  subtract(mat: IMat): void {
    if (this.rows !== mat.rows || this.cols !== mat.cols) {
      throw new Error(
        `Can not perform subtraction of matrix[${this.rows},${this.cols}](this) with matrix[${mat.rows},${mat.cols}](mat)`
      );
    }

    for (let i = 0; i < this.length; i++) {
      this.value[i] -= mat[i];
    }
  }

  clone(): IMat {
    throw new Error('Method clone is not implemented');
  }
}
