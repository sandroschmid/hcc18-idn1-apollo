export class Chicken {
  public readonly id: number;
  public readonly name: string;
  public readonly birthDate: Date;
  public eggsTotal: number;
  public eggsToday: number;
}

export class ChickenBuilder {
  private _id: number;
  private _name: string;
  private _birthDate: Date;

  public id(id: number): this {
    this._id = id;
    return this;
  }

  public name(name: string): this {
    this._name = name;
    return this;
  }

  public birthDate(birthDate: Date): this {
    this._birthDate = birthDate;
    return this;
  }

  public build(): Chicken {
    return {
      id: this._id,
      name: this._name,
      birthDate: this._birthDate,
      eggsTotal: 0,
      eggsToday: 0
    };
  }

}
