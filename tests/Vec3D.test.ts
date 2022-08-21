import Vec3D from '../src/Vec3D';

describe('Vec3D class', () => {
  let testVec3D: Vec3D;

  beforeEach(() => {
    testVec3D = new Vec3D(3, -3, 1);
  });

  it('should calculate the cross product of vec3D(3, -3, 1) and vec3D(4, 9, 2)', () => {
    // Arrange
    const secondVec3D = new Vec3D(4, 9, 2);
    const expected = new Vec3D(-15, -2, 39);

    // Act
    const actual = testVec3D.cross(secondVec3D);

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it('should check if the 3d vector (3, -3, 1) is a zero vector', () => {
    // Act
    const actual = testVec3D.isZeroVector;

    // Assert
    expect(actual).toBeFalsy();
  });

  it('should check if the 3d vector (0,0,0) is a zero vector', () => {
    // Arrange
    const vec3DToCheck = new Vec3D(0, 0, 0);

    // Act
    const actual = vec3DToCheck.isZeroVector;

    // Assert
    expect(actual).toBeTruthy();
  });

  it('should get the magnitude of the 3d vector (3, -3, 1) as 4.358898943540674', () => {
    // Arrange
    const expected = 4.358898943540674;

    // Act
    const actual = testVec3D.magnitude();

    // Assert
    expect(actual).toBe(expected);
  });

  it('should get the length of the 3d vector (3, -3, 1) as 4.358898943540674', () => {
    // Arrange
    const expected = 4.358898943540674;

    // Act
    const actual = testVec3D.length;

    // Assert
    expect(actual).toBe(expected);
  });

  it('should get the Float32Array (3, -3, 1)', () => {
    // Arrange
    const expected = new Float32Array([3, -3, 1]);

    // Act
    const actual = testVec3D.value;

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it("should set the 3D vector's x value", () => {
    // Arrange
    const setXSpy = jest.spyOn(testVec3D, 'x', 'set');

    // Act
    testVec3D.set(0, 2);

    // Assert
    expect(setXSpy).toHaveBeenCalled();
  });

  it("should set the 3D vector's y value", () => {
    // Arrange
    const setYSpy = jest.spyOn(testVec3D, 'y', 'set');

    // Act
    testVec3D.set(1, 5);

    // Assert
    expect(setYSpy).toHaveBeenCalled();
  });

  it("should set the 3D vector's z value", () => {
    // Arrange
    const setZSpy = jest.spyOn(testVec3D, 'z', 'set');

    // Act
    testVec3D.set(2, 8);

    // Assert
    expect(setZSpy).toHaveBeenCalled();
  });

  it('should add the 3D vector (4,8,2) from (3,-3,1)', () => {
    // Arrange
    const vectorToAdd = new Vec3D(4, 8, 2);
    const expected = new Vec3D(7, 5, 3);

    // Act
    testVec3D.add(vectorToAdd);

    // Assert
    expect(testVec3D).toStrictEqual(expected);
  });

  it('should subtract the 3D vector (4,8,2) from (3,-3,1)', () => {
    // Arrange
    const vectorToSubtract = new Vec3D(4, 8, 2);
    const expected = new Vec3D(-1, -11, -1);

    // Act
    testVec3D.subtract(vectorToSubtract);

    // Assert
    expect(testVec3D).toStrictEqual(expected);
  });

  it('should scale the 3D vector (3,-3,1) by 3', () => {
    // Arrange
    const scale = 3;
    const expected = new Vec3D(9, -9, 3);

    // Act
    testVec3D.scale(scale);

    // Assert
    expect(testVec3D).toStrictEqual(expected);
  });

  it('should calculate the distance of 3D vector (4,8,2) from (3,-3,1)', () => {
    // Arrange
    const expected = 11.090536506409418;
    const vectorToCalculateDistanceTo = new Vec3D(4, 8, 2);

    // Act
    const actual = testVec3D.distance(vectorToCalculateDistanceTo);

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it('should normalize 3D vector (3,-3,1)', () => {
    // Arrange
    const expected = new Vec3D(
      0.6882472016116852,
      -0.6882472016116852,
      0.22941573387056174
    );

    // Act
    const actual = testVec3D.normalize();

    // Assert
    expect(actual).toStrictEqual(expected);
  });

  it('should return the string vec3D(3, -3, 1) for 3D vector (3,-3,1)', () => {
    // Arrange
    const expected = 'vec3D(3, -3, 1)';

    // Act
    const actual = testVec3D.toString();

    // Assert
    expect(actual).toStrictEqual(expected);
  });
});
