export class NavBarItem {
  public readonly path: string;
  public readonly label: string;
  public readonly title: string;
}

export class NavBarItemBuilder {
  private _path: string;
  private _label: string;
  private _title: string;

  public path(path: string): this {
    this._path = path;
    return this;
  }

  public label(label: string): this {
    this._label = label;
    return this;
  }

  public title(title: string): this {
    this._title = title;
    return this;
  }

  public build(): NavBarItem {
    return {
      path: this._path,
      label: this._label,
      title: this._title || this._label,
    };
  }
}
