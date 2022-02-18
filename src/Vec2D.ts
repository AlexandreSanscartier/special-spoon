export default class Vec2D {

    private _vector2D: Float32Array;

    public constructor(x : number, y : number) {
        this._vector2D = new Float32Array(2);
        this._vector2D[0] = x;
        this._vector2D[1] = y;
    } 

    public get vector() {
        return this._vector2D;
    }

    public get x() {
        return this._vector2D[0];
    }

    public get y() {
        return this._vector2D[1];
    }

    public toString() : string {
        return `vec2(${this.x}, ${this.y})`;
    }

    public clone(vec2D: Vec2D) : Vec2D {
        let out = new Vec2D(vec2D.x, vec2D.y);
        return out;
    }
}