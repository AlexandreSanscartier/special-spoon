import Vector from '../src/Vector';

describe('Vector class', () => {
  let testVector: Vector;
  const testComponents = new Float32Array([10, 22]);
  const testComponentsScaledByTwo = new Float32Array([20, 44]);
  const testMagnitude = 24.166091947189145;

  beforeEach(() => {
    testVector = new Vector(testComponents.slice(0));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return Vector(10, 22) as the value for toString() of the Vector(10, 22)', () => {
    // Arrange
    const expected = 'vec(10, 22)';
    const actual = testVector.toString();

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return a new Vector with x: 10, y:22 as the value for Vector(10, 22).clone()', () => {
    // Arrange
    const expected = new Vector(testComponents);

    // Act
    const actual = testVector.clone();

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it('should throw an exception when trying to set a value out of range of the vector', () => {
    // Assert
    expect(() => {
      testVector.set(10, 1000);
    }).toThrowError();
  });

  it('should return a new Vector with x:20 and y:44 scaled by a factor of 2 Vector(10, 22).scale(2)', () => {
    // Arrange
    const expected = new Vector(testComponentsScaledByTwo);

    // Act
    testVector.scale(2);

    // Assert
    expect(testVector).toStrictEqual(expected);
  });

  it('should return the magnitude of Vector with x:10 and y:22 of 24.1660919472 Vector(10, 22).magnitude()', () => {
    // Arrange
    const expected = testMagnitude;

    // Act
    const actual = testVector.magnitude();

    // Assert
    expect(actual).toBe(expected);
  });

  it('should calculate the magnitude if this is the first call to Vector(10, 22).magnitude()', () => {
    // Arrange
    const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

    // Act
    testVector.magnitude();

    // Assert
    expect(sqrtSpy).toBeCalledTimes(1);
  });

  it('should calculate the magnitude only on the first call to Vector(10, 22).magnitude()', () => {
    // Arrange
    const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

    // Act
    for (let i = 0; i < 10; i++) {
      testVector.magnitude();
    }

    // Assert
    expect(sqrtSpy).toBeCalledTimes(1);
  });

  it('should get the length of the Vector(10, 22).magnitude()', () => {
    // Arrange
    const expected = testMagnitude;

    // Act
    const actual = testVector.length;

    // Assert
    expect(actual).toBe(expected);
  });

  it('should calculate the magnitude when calling get length of the Vector(10, 22)', () => {
    // Arrange
    const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

    // Act
    testVector.length;

    // Assert
    expect(sqrtSpy).toBeCalledTimes(1);
  });

  it('should calculate the magnitude after a change in x', () => {
    // Arrange
    const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

    // Act
    testVector.magnitude();
    testVector.set(0, 11);
    testVector.magnitude();

    // Assert
    expect(sqrtSpy).toBeCalledTimes(2);
  });

  it('should not recalculate the magnitude when the previous x is equal to the new x after a change in x', () => {
    // Arrange
    const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

    // Act
    testVector.magnitude();
    testVector.set(0, 10);
    testVector.magnitude();

    // Assert
    expect(sqrtSpy).toBeCalledTimes(1);
  });

  it('should calculate the magnitude after a change in y', () => {
    // Arrange
    const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

    // Act
    testVector.magnitude();
    testVector.set(1, 30);
    testVector.magnitude();

    // Assert
    expect(sqrtSpy).toBeCalledTimes(2);
  });

  it('should properly add the Vector(5, 10) to the Vector(10,22)', () => {
    // Arrange
    const expected = new Float32Array([15, 32]);
    const vectorToAdd = new Vector(new Float32Array([5, 10]));

    // Act
    testVector.add(vectorToAdd);

    // Assert
    expect(testVector.value).toStrictEqual(expected);
  });

  it('should throw an error when trying to add a vector of a different length', () => {
    // Arrange
    const vectorToAdd = new Vector(new Float32Array([0, 0, 0, 0]));

    // Assert
    expect(() => {
      testVector.add(vectorToAdd);
    }).toThrowError();
  });

  it('should properly subtract the Vector(5, 10) from the Vector(10,22)', () => {
    // Arrange
    const expected = new Float32Array([5, 12]);
    const vectorToSubtract = new Vector(new Float32Array([5, 10]));

    // Act
    testVector.subtract(vectorToSubtract);

    // Assert
    expect(testVector.value).toStrictEqual(expected);
  });

  it('should throw an error when trying to subtract a vector of a different length', () => {
    // Arrange
    const vectorToSubtract = new Vector(new Float32Array([0, 0, 0, 0]));

    // Assert
    expect(() => {
      testVector.subtract(vectorToSubtract);
    }).toThrowError();
  });

  it('should not recalculate the magnitude when the previous y is equal to the new y after a change in y', () => {
    // Arrange
    const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

    // Act
    testVector.magnitude();
    testVector.value[1] = 22;
    testVector.magnitude();

    // Assert
    expect(sqrtSpy).toBeCalledTimes(1);
  });

  it('should caculate the dot product of Vector(5,10) and Vector(10,22)', () => {
    // Arrange
    const vectorToDotProduct = new Vector(new Float32Array([5, 10]));
    const expected = 270;

    // Act
    const actual = testVector.dot(vectorToDotProduct);

    // Assert
    expect(actual).toBe(expected);
  });

  it('should throw an error when trying to calculate the dot product of vectors of different lengths', () => {
    // Arrange
    const vectorToDotProduct = new Vector(new Float32Array([1, 1, 1, 1]));

    // Assert
    expect(() => {
      testVector.dot(vectorToDotProduct);
    }).toThrowError();
  });

  it('should calculate the distance between Vector(5,10) and Vector(10,22)', () => {
    // Arrange
    const vectorToCalculateDistanceTo = new Vector(new Float32Array([5, 10]));
    const expected = 13;

    // Act
    const actual = testVector.distance(vectorToCalculateDistanceTo);

    // Assert
    expect(actual).toBe(expected);
  });

  it('should throw an error when trying to calculate distance of vectors of different lengths', () => {
    // Arrange
    const vectorToCalculateDistanceTo = new Vector(new Float32Array([1, 1, 1]));

    // Assert
    expect(() => {
      testVector.distance(vectorToCalculateDistanceTo);
    }).toThrowError();
  });

  it('should normalize the Vector with x:10 and y:22 to X:0.41380295157432556 Y:0.9103664755821228 Vector(10,22).normalize()', () => {
    // Arrange
    const expectedX = 0.41380295157432556;
    const expectedY = 0.9103664755821228;

    // Act
    const actual = testVector.normalize();

    // Assert
    expect(actual.value[0]).toBe(expectedX);
    expect(actual.value[1]).toBe(expectedY);
  });

  it('should should return the Vector(0,0) when it is a zero vector Vector(0,0).normalize()', () => {
    // Arrange
    const vector = new Vector(new Float32Array([0, 0]));
    const expectedX = 0;
    const expectedY = 0;

    // Act
    const actual = vector.normalize();

    // Assert
    expect(actual.value[0]).toBe(expectedX);
    expect(actual.value[1]).toBe(expectedY);
  });

  it('should modify the x value of the original and not the clone', () => {
    // Arrange
    const expected = 5;
    const expectedCloneX = 10;

    // Act
    const clonedVector = testVector.clone();
    testVector.value[0] = expected;

    // Assert
    expect(testVector.value[0]).toBe(expected);
    expect(clonedVector.value[0]).toBe(expectedCloneX);
  });

  it('should modify the y value of the original and not the clone', () => {
    // Arrange
    const expected = 11;
    const expectedCloneY = 22;

    // Act
    const clonedVector = testVector.clone();
    testVector.value[1] = expected;

    // Assert
    expect(testVector.value[1]).toBe(expected);
    expect(clonedVector.value[1]).toBe(expectedCloneY);
  });

  it('should return the same vector', () => {
    // Arrange
    const expected = new Float32Array([10, 22]);

    // Act
    const actual = testVector.value;

    // Assert
    expect(actual).toStrictEqual(expected);
  });
});
