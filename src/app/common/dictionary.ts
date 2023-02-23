export class Dictionary {
  public get meanings(): Meaning[] {
      return this._meanings;
  }
  public set meanings(value: Meaning[]) {
      this._meanings = value;
  }
  public get phonetic(): string {
    return this._phonetic;
  }
  public set phonetic(value: string) {
    this._phonetic = value;
  }
  public get word(): string {
    return this._word;
  }
  public set word(value: string) {
    this._word = value;
  }
  constructor(
    private _word: string,
    private _phonetic: string,
    private _meanings: Meaning[]
  ) {}
}

export class Meaning {
  public get partOfSpeech(): string {
      return this._partOfSpeech;
  }
  public set partOfSpeech(value: string) {
      this._partOfSpeech = value;
  }
  public get definitions(): Definition[] {
    return this._definitions;
  }
  public set definitions(value: Definition[]) {
    this._definitions = value;
  }
  constructor(private _definitions: Definition[], private _partOfSpeech: string) {}
}

export class Definition {
  public get example(): string {
      return this._example;
  }
  public set example(value: string) {
      this._example = value;
  }
  public get definition(): string {
      return this._definition;
  }
  public set definition(value: string) {
      this._definition = value;
  }
  
  constructor(private _definition: string, private _example: string) {}
}
