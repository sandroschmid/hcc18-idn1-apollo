import { Image } from './image';
import { PanelResponse } from './panel-response';

export class PanelQuestion {
  public readonly id: number;
  public readonly image: Image;
  public readonly text: string;
  public readonly user: string;
  public readonly date: Date;
  public readonly responses: PanelResponse[];
}

export class PanelQuestionBuilder {
  private _id: number;
  private _image: Image;
  private _text: string;
  private _user: string;
  private _date: Date;
  private _responses: PanelResponse[];

  public id(id: number): this {
    this._id = id;
    return this;
  }

  public image(image: Image): this {
    this._image = image;
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

  public responses(responses: PanelResponse[]): this {
    this._responses = responses;
    return this;
  }

  public build(): PanelQuestion {
    return {
      id: this._id,
      image: this._image,
      text: this._text,
      user: this._user,
      date: this._date || new Date(),
      responses: this._responses || [],
    };
  }
}
