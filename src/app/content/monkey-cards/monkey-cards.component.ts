import { Component, OnInit } from '@angular/core';
import {MonkeyService} from '../../providers/monkey.service';

@Component({
  selector: 'app-monkey-cards',
  templateUrl: './monkey-cards.component.html',
  styleUrls: ['./monkey-cards.component.css']
})
export class MonkeyCardsComponent implements OnInit {
  public monkeys;

  constructor(private monkeyService: MonkeyService) { }

  ngOnInit() {
    this.monkeys = this.monkeyService.getMonkeys().valueChanges();
  }

}
