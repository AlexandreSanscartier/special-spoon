export default class Utils {
  static degree = Math.PI / 180;

  static toRadian(angle: number) {
    return angle * Utils.degree;
  }
}
