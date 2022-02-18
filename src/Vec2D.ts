export default class Vec2D {

    private _vector2D: Float32Array;
    private _magnitude : number;

    private _mustRecalculateMagnitude : boolean = true;

    public constructor(x : number, y : number) {
        this._vector2D = new Float32Array(2);
        this._vector2D[0] = x;
        this._vector2D[1] = y;
    } 

    public get vector() {
        return this._vector2D;
    }

    public set x(value) {
        const isSame = value === this.x;
        this._vector2D[0] = value;
        if(!isSame) {
            this._mustRecalculateMagnitude = true;
        }
    }

    public get x() {
        return this._vector2D[0];
    }

    public set y(value) {
        const isSame = value === this.y;
        this._vector2D[1] = value;
        if(!isSame) {
            this._mustRecalculateMagnitude = true;
        }
    }

    public get y() {
        return this._vector2D[1];
    }

    public scale(s : number) : Vec2D {
        return new Vec2D(this.x * s, this.y * 2);
    }

    public scaleInPlace(s: number) {
        this.x = this.x * s;
        this.y = this.y * s;
        this._mustRecalculateMagnitude = true;
    }

    public magnitude() : number {
        if(this._mustRecalculateMagnitude) {
            this._magnitude = Math.sqrt(this.x * this.x + this.y * this.y);
            this._mustRecalculateMagnitude = false;
        }
        return this._magnitude;
    }

    public toString() : string {
        return `vec2(${this.x}, ${this.y})`;
    }

    public clone() : Vec2D {
        let out = new Vec2D(this.x, this.y);
        return out;
    }
}