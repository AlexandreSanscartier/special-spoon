import Mat3D from '../src/Mat3D';
import Vec3D from '../src/Vec3D';

describe('Mat3D class', () => {
  let testMat3D: Mat3D;

  beforeEach(() => {
    testMat3D = new Mat3D();
    testMat3D.value[0] = 1;
    testMat3D.value[1] = 2;
    testMat3D.value[2] = 3;
    testMat3D.value[3] = 4;
    testMat3D.value[4] = 5;
    testMat3D.value[5] = 6;
    testMat3D.value[6] = 7;
    testMat3D.value[7] = 8;
    testMat3D.value[8] = 9;
  });

  it('should return the correct number of rows (3) for a Mat3D', () => {
    // Arrange
    const matrix = new Mat3D();
    const expected = 3;

    // Assert
    expect(matrix.rows).toBe(expected);
  });

  it('should return the correct number of cols (3) for a Mat3D', () => {
    // Arrange
    const matrix = new Mat3D();
    const expected = 3;

    // Assert
    expect(matrix.cols).toBe(expected);
  });

  it('should return the correct length (9) for a Mat3D', () => {
    // Arrange
    const matrix = new Mat3D();
    const expected = 9;

    // Assert
    expect(matrix.length).toBe(expected);
  });

  it('should retrun the indentity matrix 3D', () => {
    // Arrange
    const expected = Mat3D.fromValues(1, 0, 0, 0, 1, 0, 0, 0, 1);

    // Act
    const actual = Mat3D.identity();

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it('should properly add a Mat3D with another Mat3D', () => {
    // Arrange
    const expected = new Float32Array([3, 4, 5, 6, 7, 8, 9, 10, 11]);
    const mat3DToAdd = new Mat3D();
    for (let i = 0; i < mat3DToAdd.length; i++) {
      mat3DToAdd.value[i] = 2;
    }

    // Act
    testMat3D.add(mat3DToAdd);

    // Assert
    expect(testMat3D.value).toStrictEqual(expected);
  });

  it('should properly subtract a Mat3D with another Mat3D', () => {
    // Arrange
    const expected = new Float32Array([-1, 0, 1, 2, 3, 4, 5, 6, 7]);
    const mat3DToSubtract = new Mat3D();
    for (let i = 0; i < mat3DToSubtract.length; i++) {
      mat3DToSubtract.value[i] = 2;
    }

    // Act
    testMat3D.subtract(mat3DToSubtract);

    // Assert
    expect(testMat3D.value).toStrictEqual(expected);
  });

  it('should properly inverse the Mat3D', () => {
    // Arrange
    const expected = Mat3D.fromValues(7, -3, -3, -1, 1, 0, -1, 0, 1);
    const matrixToInverse = Mat3D.fromValues(1, 3, 3, 1, 4, 3, 1, 3, 4);

    // Act
    const actual = matrixToInverse.inverse();

    // Assert
    expect(actual).toStrictEqual(expected);
  });
});

describe('Mat3D static functions', () => {
  let testMat3D: Mat3D;

  // [1,2,3]
  // [4,5,6]
  // [7,8,9]
  beforeEach(() => {
    testMat3D = new Mat3D();
    testMat3D.value[0] = 1;
    testMat3D.value[1] = 2;
    testMat3D.value[2] = 3;
    testMat3D.value[3] = 4;
    testMat3D.value[4] = 5;
    testMat3D.value[5] = 6;
    testMat3D.value[6] = 7;
    testMat3D.value[7] = 8;
    testMat3D.value[8] = 9;
  });

  it('should properly build a Mat3D with Mat3D.fromValues(...)', () => {
    // Arrange
    const mat3DFromValues = Mat3D.fromValues(1, 2, 3, 4, 5, 6, 7, 8, 9);

    // Assert
    expect(testMat3D).toStrictEqual(mat3DFromValues);
  });

  it('should properly build a Mat3D with Mat3D.fromVec3Ds(...)', () => {
    // Arrange
    const expected = new Mat3D();
    for (let i = 0; i < expected.length; i++) {
      expected.value[i] = i;
    }
    const vec1 = new Vec3D(0, 1, 2);
    const vec2 = new Vec3D(3, 4, 5);
    const vec3 = new Vec3D(6, 7, 8);

    // Act
    const actual = Mat3D.fromRowMajorOrderVec3Ds(vec1, vec2, vec3);

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it('should properly multiply two matrices', () => {
    // Arrange
    const mat3DToMultiply = new Mat3D();
    mat3DToMultiply.value[0] = 5;
    mat3DToMultiply.value[1] = 5;
    mat3DToMultiply.value[2] = 5;
    mat3DToMultiply.value[3] = 5;
    mat3DToMultiply.value[4] = 5;
    mat3DToMultiply.value[5] = 5;
    mat3DToMultiply.value[6] = 5;
    mat3DToMultiply.value[7] = 5;
    mat3DToMultiply.value[8] = 5;

    const expected = new Mat3D();
    expected.value[0] = 30;
    expected.value[1] = 30;
    expected.value[2] = 30;
    expected.value[3] = 75;
    expected.value[4] = 75;
    expected.value[5] = 75;
    expected.value[6] = 120;
    expected.value[7] = 120;
    expected.value[8] = 120;

    // Act
    const actual = testMat3D.multiply(mat3DToMultiply);

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it('should properly calculate the determinant', () => {
    // Arrange
    const mat3DToCalculateDeterminantFor = new Mat3D();
    mat3DToCalculateDeterminantFor.value[0] = 10;
    mat3DToCalculateDeterminantFor.value[1] = 5;
    mat3DToCalculateDeterminantFor.value[2] = 2;
    mat3DToCalculateDeterminantFor.value[3] = 12;
    mat3DToCalculateDeterminantFor.value[4] = 5;
    mat3DToCalculateDeterminantFor.value[5] = 7;
    mat3DToCalculateDeterminantFor.value[6] = 92;
    mat3DToCalculateDeterminantFor.value[7] = 8;
    mat3DToCalculateDeterminantFor.value[8] = 7;

    const expected = 1862;

    // Act
    const actual = mat3DToCalculateDeterminantFor.determinant();

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it('should properly clone the Mat3D', () => {
    // Arrange
    const expected = new Mat3D();
    expected.value[0] = 1;
    expected.value[1] = 2;
    expected.value[2] = 3;
    expected.value[3] = 4;
    expected.value[4] = 5;
    expected.value[5] = 6;
    expected.value[6] = 7;
    expected.value[7] = 8;
    expected.value[8] = 9;

    // Act
    const actual = testMat3D.clone();

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it('should properly extract a 3D vector containing the values of the first row', () => {
    // Arrange
    const expected = new Vec3D(1, 2, 3);

    // Act
    const actual = testMat3D.extractVec3DRowMajorOrder(0);

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it('should properly extract a 3D vector containing the values of the second row', () => {
    // Arrange
    const expected = new Vec3D(4, 5, 6);

    // Act
    const actual = testMat3D.extractVec3DRowMajorOrder(1);

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it('should properly extract a 3D vector containing the values of the third row', () => {
    // Arrange
    const expected = new Vec3D(7, 8, 9);

    // Act
    const actual = testMat3D.extractVec3DRowMajorOrder(2);

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it('should properly return a string representation of a Mat3D', () => {
    // Arrange
    const mat3D = new Mat3D();
    const expected = 'Mat3D(0, 1, 2, 3, 4, 5, 6, 7, 8)';
    for (let i = 0; i < mat3D.length; i++) {
      mat3D.value[i] = i;
    }

    const actual = mat3D.toString();

    // Assert
    expect(actual).toStrictEqual(expected);
  });
});
