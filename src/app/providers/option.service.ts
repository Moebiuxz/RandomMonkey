import { Injectable } from '@angular/core';
import { Option } from '../model/option';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  private readonly resultset: AngularFireList<Option>;
  public selectedOption: Option = new Option();

  constructor(database: AngularFireDatabase) {
    this.resultset = database.list('options');
  }

  public getOptions(): AngularFireList<Option> {
    return this.resultset;
  }

  public addOption(option: Option) {
    this.resultset.push(option).then(t => {
      option.key = t.key;
      this.resultset.update(t.key, option);
    });
  }

  public updateOption(key: string, option: Option) {
    this.resultset.update(key, option);
  }

  public deleteOption(key: string) {
    this.resultset.remove(key);
  }

  public deleteEverything() {
    this.resultset.remove();
  }
}
