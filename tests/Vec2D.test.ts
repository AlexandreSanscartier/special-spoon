import Vec2D from '../src/Vec2D';

describe('Vec2D class', () => {

    let testVec2D : Vec2D;

    beforeEach(() => {
        testVec2D = new Vec2D(10, 22);
    });

    afterEach(() => {
        jest.clearAllMocks();
      });

    it("should return the 10 as the value for x of the Vec2D(10, 22)", () => {
        // Arrange
        var expected = 10;
        var actual = testVec2D.x;

        // Assert
        expect(actual).toBe(expected);
    });

    it("should return the 22 as the value for y of the Vec2D(10, 22)", () => {
        // Arrange
        var expected = 22;
        var actual = testVec2D.y;

        // Assert
        expect(actual).toBe(expected);
    });

    it("should return Vec2(10, 22) as the value for toString() of the Vec2D(10, 22)", () => {
        // Arrange
        var expected = 'vec2(10, 22)';
        var actual = testVec2D.toString();

        // Assert
        expect(actual).toBe(expected);
    });

    it("should return a new Vec2D with x: 10, y:22 as the value for Vec2D(10, 22).clone()", () => {
        // Arrange
        var expected = new Vec2D(10, 22);

        // Act
        var actual = testVec2D.clone();

        // Assert
        expect(actual).toStrictEqual(expected);
    });

    it("should return a new Vec2D with x:20 and y:44 scaled by a factor of 2 Vec2D(10, 22).scale(2)", () => {
        // Arrange
        var expected = new Vec2D(20, 44);
        var expectedOriginal = new Vec2D(10, 22);

        // Act
        var actual = testVec2D.scale(2);

        // Assert
        expect(actual).toStrictEqual(expected);
        expect(testVec2D).toStrictEqual(expectedOriginal);
    });

    it("should scale in place the Vec2D with x:20 and y:44 scaled by a factor of 2 Vec2D(10, 22).scaleInPlace(2)", () => {
        // Arrange
        var expectedX = 20;
        var expectedY = 44;

        // Act
        testVec2D.scaleInPlace(2);

        // Assert
        expect(testVec2D.x).toBe(expectedX);
        expect(testVec2D.y).toBe(expectedY);
    });

    it("should return the magnitude of Vec2D with x:10 and y:22 of 24.1660919472 Vec2D(10, 22).magnitude()", () => {
        // Arrange
        var expected = 24.166091947189145;

        // Act
        var actual = testVec2D.magnitude();

        // Assert
        expect(actual).toBe(expected);
    });

    it("should calculate the magnitude if this is the first call to Vec2D(10, 22).magnitude()", () => {
        // Arrange
        const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

        // Act
        testVec2D.magnitude();

        // Assert
        expect(sqrtSpy).toBeCalledTimes(1);
    });

    it("should calculate the magnitude only one the first call to Vec2D(10, 22).magnitude()", () => {
        // Arrange
        const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

        // Act
        for(let i = 0; i < 10; i++) {
            testVec2D.magnitude();
        }

        // Assert
        expect(sqrtSpy).toBeCalledTimes(1);
    });

    it("should calculate the magnitude after a change in x", () => {
        // Arrange
        const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

        // Act
        testVec2D.magnitude();
        testVec2D.x = 11;
        testVec2D.magnitude();

        // Assert
        expect(sqrtSpy).toBeCalledTimes(2);
    });

    it("should not recalculate the magnitude when the previous x is equal to the new x after a change in x", () => {
        // Arrange
        const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

        // Act
        testVec2D.magnitude();
        testVec2D.x = 10;
        testVec2D.magnitude();

        // Assert
        expect(sqrtSpy).toBeCalledTimes(1);
    });  

    it("should calculate the magnitude after a change in y", () => {
        // Arrange
        const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

        // Act
        testVec2D.magnitude();
        testVec2D.y = 30;
        testVec2D.magnitude();

        // Assert
        expect(sqrtSpy).toBeCalledTimes(2);
    });

    it("should not recalculate the magnitude when the previous y is equal to the new y after a change in y", () => {
        // Arrange
        const sqrtSpy = jest.spyOn(global.Math, 'sqrt');

        // Act
        testVec2D.magnitude();
        testVec2D.y = 22;
        testVec2D.magnitude();

        // Assert
        expect(sqrtSpy).toBeCalledTimes(1);
    });

    it("should modify the x value of the original and not the clone", () => {
        // Arrange
        var expected = 5;
        var expectedCloneX = 10;

        // Act
        var clonedVec2D = testVec2D.clone();
        testVec2D.x = expected;

        // Assert
        expect(testVec2D.x).toBe(expected);
        expect(clonedVec2D.x).toBe(expectedCloneX);
    });
});