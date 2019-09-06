import { Injectable } from '@angular/core';
import {Monkey} from '../model/monkey';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MonkeyService {
  private readonly resultset: AngularFireList<Monkey>;
  public selectedMonkey: Monkey = new Monkey();

  constructor(database: AngularFireDatabase) {
    this.resultset = database.list('monkey');
  }

  public getMonkeys(): AngularFireList<Monkey> {
    return this.resultset;
  }

  public addMonkey(monkey: Monkey) {
    this.resultset.push(monkey).then(t => {
      monkey.key = t.key;
      this.resultset.update(t.key, monkey);
    });
  }

  public updateMonkey(key: string, monkey: Monkey) {
    this.resultset.update(key, monkey);
  }

  public deleteMonkey(key: string) {
    this.resultset.remove(key);
  }

  public deleteEverything() {
    this.resultset.remove();
  }
}
