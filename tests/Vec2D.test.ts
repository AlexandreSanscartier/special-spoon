import Vec2D from '../src/Vec2D';

describe('Vec2D class', () => {
  let testVec2D: Vec2D;
  const testMagnitude = 24.166091947189145;

  beforeEach(() => {
    testVec2D = new Vec2D(10, 22);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set the x value using the set', () => {
    // Arrange
    const expected = 7;

    // Act
    testVec2D.set(0, expected);

    // Assert
    expect(testVec2D.x).toBe(expected);
  });

  it('should set the y value using the set', () => {
    // Arrange
    const expected = 7;

    // Act
    testVec2D.set(1, expected);

    // Assert
    expect(testVec2D.y).toBe(expected);
  });

  it('should properly set the value of x when it is valid', () => {
    // Arrange
    const expected = 1337;

    // Act
    testVec2D.x = expected;

    // Assert
    expect(testVec2D.x).toBe(expected);
  });

  it('should return the 10 as the value for x of the Vec2D(10, 22)', () => {
    // Arrange
    const expected = 10;
    const actual = testVec2D.x;

    // Assert
    expect(actual).toBe(expected);
  });

  it('should properly set the value of y when it is valid', () => {
    // Arrange
    const expected = 1337;

    // Act
    testVec2D.y = expected;

    // Assert
    expect(testVec2D.y).toBe(expected);
  });

  it('should return the 22 as the value for y of the Vec2D(10, 22)', () => {
    // Arrange
    const expected = 22;
    const actual = testVec2D.y;

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return Vec2(10, 22) as the value for toString() of the Vec2D(10, 22)', () => {
    // Arrange
    const expected = 'vec2D(10, 22)';
    const actual = testVec2D.toString();

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return a new Vec2D with x: 10, y:22 as the value for Vec2D(10, 22).clone()', () => {
    // Arrange
    const expected = new Vec2D(10, 22);

    // Act
    const actual = testVec2D.clone();

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it('should return a new Vec2D with x:20 and y:44 scaled by a factor of 2 Vec2D(10, 22).scale(2)', () => {
    // Arrange
    const expected = new Vec2D(20, 44);

    // Act
    testVec2D.scale(2);

    // Assert
    expect(testVec2D).toStrictEqual(expected);
  });

  it('should return the magnitude of Vec2D with x:10 and y:22 of 24.1660919472 Vec2D(10, 22).magnitude()', () => {
    // Arrange
    const expected = testMagnitude;

    // Act
    const actual = testVec2D.magnitude();

    // Assert
    expect(actual).toBe(expected);
  });

  it('should calculate the magnitude if this is the first call to Vec2D(10, 22).magnitude()', () => {
    // Arrange
    const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

    // Act
    testVec2D.magnitude();

    // Assert
    expect(sqrtSpy).toBeCalledTimes(1);
  });

  it('should calculate the magnitude only on the first call to Vec2D(10, 22).magnitude()', () => {
    // Arrange
    const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

    // Act
    for (let i = 0; i < 10; i++) {
      testVec2D.magnitude();
    }

    // Assert
    expect(sqrtSpy).toBeCalledTimes(1);
  });

  it('should get the length of the Vec2D(10, 22).magnitude()', () => {
    // Arrange
    const expected = testMagnitude;

    // Act
    const actual = testVec2D.length;

    // Assert
    expect(actual).toBe(expected);
  });

  it('should calculate the magnitude when calling get length of the Vec2D(10, 22)', () => {
    // Arrange
    const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

    // Act
    testVec2D.length;

    // Assert
    expect(sqrtSpy).toBeCalledTimes(1);
  });

  it('should calculate the magnitude after a change in x', () => {
    // Arrange
    const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

    // Act
    testVec2D.magnitude();
    testVec2D.x = 11;
    testVec2D.magnitude();

    // Assert
    expect(sqrtSpy).toBeCalledTimes(2);
  });

  it('should not recalculate the magnitude when the previous x is equal to the new x after a change in x', () => {
    // Arrange
    const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

    // Act
    testVec2D.magnitude();
    testVec2D.x = 10;
    testVec2D.magnitude();

    // Assert
    expect(sqrtSpy).toBeCalledTimes(1);
  });

  it('should calculate the magnitude after a change in y', () => {
    // Arrange
    const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

    // Act
    testVec2D.magnitude();
    testVec2D.y = 30;
    testVec2D.magnitude();

    // Assert
    expect(sqrtSpy).toBeCalledTimes(2);
  });

  it('should properly add the Vec2D(5, 10) to the Vec2D(10,22)', () => {
    // Arrange
    const expected = new Float32Array([15, 32]);
    const vectorToAdd = new Vec2D(5, 10);

    // Act
    testVec2D.add(vectorToAdd);

    // Assert
    expect(testVec2D.value).toStrictEqual(expected);
  });

  it('should properly subtract the Vec2D(5, 10) from the Vec2D(10,22)', () => {
    // Arrange
    const expected = new Float32Array([5, 12]);
    const vectorToSubtract = new Vec2D(5, 10);

    // Act
    testVec2D.subtract(vectorToSubtract);

    // Assert
    expect(testVec2D.value).toStrictEqual(expected);
  });

  it('should not recalculate the magnitude when the previous y is equal to the new y after a change in y', () => {
    // Arrange
    const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

    // Act
    testVec2D.magnitude();
    testVec2D.y = 22;
    testVec2D.magnitude();

    // Assert
    expect(sqrtSpy).toBeCalledTimes(1);
  });

  it('should caculate the dot product of Vec2D(5,10) and Vec2D(10,22)', () => {
    // Arrange
    const vectorToDotProduct = new Vec2D(5, 10);
    const expected = 270;

    // Act
    const actual = testVec2D.dot(vectorToDotProduct);

    // Assert
    expect(actual).toBe(expected);
  });

  it('should calculate the distance between Vec2D(5,10) and Vec2D(10,22)', () => {
    // Arrange
    const vectorToCalculateDistanceTo = new Vec2D(5, 10);
    const expected = 13;

    // Act
    const actual = testVec2D.distance(vectorToCalculateDistanceTo);

    // Assert
    expect(actual).toBe(expected);
  });

  it('should normalize the Vec2D with x:10 and y:22 to X:0.41380295157432556 Y:0.9103664755821228 Vec2D(10,22).normalize()', () => {
    // Arrange
    const expectedX = 0.41380295157432556;
    const expectedY = 0.9103664755821228;

    // Act
    const actual = testVec2D.normalize();

    // Assert
    expect(actual.x).toBe(expectedX);
    expect(actual.y).toBe(expectedY);
  });

  it('should should return the Vec2D(0,0) when it is a zero vector Vec2D(0,0).normalize()', () => {
    // Arrange
    const vec2D = new Vec2D(0, 0);
    const expectedX = 0;
    const expectedY = 0;

    // Act
    const actual = vec2D.normalize();

    // Assert
    expect(actual.x).toBe(expectedX);
    expect(actual.y).toBe(expectedY);
  });

  it('should modify the x value of the original and not the clone', () => {
    // Arrange
    const expected = 5;
    const expectedCloneX = 10;

    // Act
    const clonedVec2D = testVec2D.clone();
    testVec2D.x = expected;

    // Assert
    expect(testVec2D.x).toBe(expected);
    expect(clonedVec2D.x).toBe(expectedCloneX);
  });

  it('should modify the y value of the original and not the clone', () => {
    // Arrange
    const expected = 11;
    const expectedCloneY = 22;

    // Act
    const clonedVec2D = testVec2D.clone();
    testVec2D.y = expected;

    // Assert
    expect(testVec2D.y).toBe(expected);
    expect(clonedVec2D.y).toBe(expectedCloneY);
  });

  it('should return the same vector', () => {
    // Arrange
    const expected = new Float32Array([10, 22]);

    // Act
    const actual = testVec2D.value;

    // Assert
    expect(actual).toStrictEqual(expected);
  });
});
