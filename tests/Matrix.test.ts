import Matrix from '../src/Matrix';

describe('Matrix class', () => {
  let testMatrix: Matrix;

  beforeEach(() => {
    testMatrix = new Matrix(3, 3);
    testMatrix.value[0] = 1;
    testMatrix.value[1] = 2;
    testMatrix.value[2] = 3;
    testMatrix.value[3] = 4;
    testMatrix.value[4] = 5;
    testMatrix.value[5] = 6;
    testMatrix.value[6] = 7;
    testMatrix.value[7] = 8;
    testMatrix.value[8] = 9;
  });

  it('should return the correct number of rows (4) for a matrix(4,6)', () => {
    // Arrange
    const matrix = new Matrix(4, 6);
    const expected = 4;

    // Assert
    expect(matrix.rows).toBe(expected);
  });

  it('should return the correct number of columns (6) for a matrix(4,6)', () => {
    // Arrange
    const matrix = new Matrix(4, 6);
    const expected = 6;

    // Assert
    expect(matrix.cols).toBe(expected);
  });

  it('should return the correct length (24) for a matrix(4,6)', () => {
    // Arrange
    const matrix = new Matrix(4, 6);
    const expected = 24;

    // Assert
    expect(matrix.length).toBe(expected);
  });

  it('should properly add matrix(3,3)', () => {
    // Arrange
    const expected = new Float32Array([4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const matrixToAdd = new Matrix(3, 3);
    for (let i = 0; i < matrixToAdd.length; i++) {
      matrixToAdd[i] = 3;
    }

    // Act
    testMatrix.add(matrixToAdd);

    // Assert
    expect(testMatrix.value).toStrictEqual(expected);
  });

  it('should throw error when trying to add two incompatible matrices together', () => {
    // Act
    const matrixToAdd = new Matrix(2, 2);
    for (let i = 0; i < matrixToAdd.length; i++) {
      matrixToAdd[i] = 3;
    }

    // Assert
    expect(() => {
      testMatrix.add(matrixToAdd);
    }).toThrowError();
  });

  it('should properly subtract matrix(3,3)', () => {
    // Arrange
    const expected = new Float32Array([-2, -1, 0, 1, 2, 3, 4, 5, 6]);
    const matrixToSubtract = new Matrix(3, 3);
    for (let i = 0; i < matrixToSubtract.length; i++) {
      matrixToSubtract[i] = 3;
    }

    // Act
    testMatrix.subtract(matrixToSubtract);

    // Assert
    expect(testMatrix.value).toStrictEqual(expected);
  });

  it('should throw error when trying to subtract two incompatible matrices together', () => {
    // Act
    const matrixToSubtract = new Matrix(2, 2);
    for (let i = 0; i < matrixToSubtract.length; i++) {
      matrixToSubtract[i] = 3;
    }

    // Assert
    expect(() => {
      testMatrix.subtract(matrixToSubtract);
    }).toThrowError();
  });

  describe('Unimplemented errors', () => {
    it('should throw error when trying to call determinant', () => {
      // Assert
      expect(() => {
        testMatrix.determinant();
      }).toThrowError();
    });

    it('should throw error when trying to call multiply', () => {
      // Assert
      expect(() => {
        testMatrix.multiply();
      }).toThrowError();
    });

    it('should throw error when trying to call inverse', () => {
      // Assert
      expect(() => {
        testMatrix.inverse(testMatrix);
      }).toThrowError();
    });

    it('should throw error when trying to call clone', () => {
      // Assert
      expect(() => {
        testMatrix.clone();
      }).toThrowError();
    });
  });
});
