/**
 * Sources:
 * https://www.designedbyaturtle.co.uk/2014/convert-string-to-hexidecimal-colour-with-javascript-vanilla/
 * https://stackoverflow.com/a/5624139/3863059
 */
export class Color {

  public static fromString(value: string): Color {
    const hexColor = Color.hexColor(Color.hashCode(value));
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    return result ? new Color(
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ) : null;
  }

  private static hashCode(str): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  private static hexColor(value: number) {
    let hex = ((value >> 24) & 0xFF).toString(16) +
      ((value >> 16) & 0xFF).toString(16) +
      ((value >> 8) & 0xFF).toString(16) +
      (value & 0xFF).toString(16);
    hex += '000000';
    return hex.substring(0, 6);
  }

  constructor(public readonly r,
              public readonly g,
              public readonly b) {
  }

  public rgb(): string {
    return `rgb(${this.r},${this.g},${this.b})`;
  }

  public rgba(a: number): string {
    return `rgba(${this.r},${this.g},${this.b},${a})`;
  }

  public toString(): string {
    return this.rgb();
  }
}
