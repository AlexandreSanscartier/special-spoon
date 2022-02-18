import Vec2D from '../src/Vec2D';

describe('Vec2D class', () => {
    it("should return the 10 as the value for x of the vec2D(10, 22)", () => {
        // Arrange
        var testVec2D = new Vec2D(10, 22);
        var expected = 10;
        var actual = testVec2D.x;

        // Assert
        expect(actual).toBe(expected);
    });

    it("should return the 22 as the value for y of the vec2D(10, 22)", () => {
        // Arrange
        var testVec2D = new Vec2D(10, 22);
        var expected = 22;
        var actual = testVec2D.y;

        // Assert
        expect(actual).toBe(expected);
    });
});