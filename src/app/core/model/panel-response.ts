export class PanelResponse {
  public readonly id: number;
  public readonly text: string;
  public readonly user: string;
  public readonly date: Date;
}

export class PanelResponseBuilder {
  private _id: number;
  private _text: string;
  private _user: string;
  private _date: Date;

  public id(id: number): this {
    this._id = id;
    return this;
  }

  public text(text: string): this {
    this._text = text;
    return this;
  }

  public user(user: string): this {
    this._user = user;
    return this;
  }

  public date(date: Date): this {
    this._date = date;
    return this;
  }

  public build(): PanelResponse {
    return {
      id: this._id,
      text: this._text,
      user: this._user,
      date: this._date || new Date(),
    };
  }
}
