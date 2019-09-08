import { Component, OnInit } from '@angular/core';
import {MonkeyService} from '../../providers/monkey.service';
import {Monkey} from '../../model/monkey';
declare var $: any;

@Component({
  selector: 'app-monkey-cards',
  templateUrl: './monkey-cards.component.html',
  styleUrls: ['./monkey-cards.component.css']
})
export class MonkeyCardsComponent implements OnInit {
  public monkeys;
  public monkeyList: any[];
  private position: number;
  private positionList: any[];

  constructor(private monkeyService: MonkeyService) { }

  ngOnInit() {
    this.getMonkeyData();
  }

  private getMonkeyData() {
    this.monkeyService.getMonkeys().valueChanges().subscribe(monkeys => {
      this.monkeyList = [];
      this.positionList = [];
      this.position = 1;
      monkeys.forEach(monkey => {
        this.positionList.push(this.position);
        this.position++;
      });
      // tslint:disable-next-line:only-arrow-functions
      this.positionList = this.positionList.sort(function() {return Math.random() - 0.5; });
      this.position = 0;
      monkeys.forEach(monkey => {
        monkey['position'] = this.positionList[this.position];
        this.position++;
        this.monkeyList.push(monkey as Monkey);
      });
    });
  }
}
