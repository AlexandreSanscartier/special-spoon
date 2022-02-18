import Vec2D from '../src/Vec2D';

describe('Vec2D class', () => {
    it("should return the 10 as the value for x of the Vec2D(10, 22)", () => {
        // Arrange
        var testVec2D = new Vec2D(10, 22);
        var expected = 10;
        var actual = testVec2D.x;

        // Assert
        expect(actual).toBe(expected);
    });

    it("should return the 22 as the value for y of the Vec2D(10, 22)", () => {
        // Arrange
        var testVec2D = new Vec2D(10, 22);
        var expected = 22;
        var actual = testVec2D.y;

        // Assert
        expect(actual).toBe(expected);
    });

    it("should return vec2(10, 22) as the value for toString() of the Vec2D(10, 22)", () => {
        // Arrange
        var testVec2D = new Vec2D(10, 22);
        var expected = 'vec2(10, 22)';
        var actual = testVec2D.toString();

        // Assert
        expect(actual).toBe(expected);
    });

    it("should return a new vec2 with x: 10, y:22 as the value for Vec2D(10, 22).clone()", () => {
        // Arrange
        var testVec2D = new Vec2D(10, 22);
        var expected = new Vec2D(10, 22);

        // Act
        var actual = testVec2D.clone();

        // Assert
        expect(actual).toStrictEqual(expected);
    });

    it("should modify the x value of the original and not the clone", () => {
        // Arrange
        var testVec2D = new Vec2D(10, 22);
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