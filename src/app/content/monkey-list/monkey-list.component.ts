import { Component, OnInit } from '@angular/core';
import {MonkeyService} from '../../providers/monkey.service';

@Component({
  selector: 'app-monkey-list',
  templateUrl: './monkey-list.component.html',
  styleUrls: ['./monkey-list.component.css']
})
export class MonkeyListComponent implements OnInit {
  private monkeys: any;

  constructor(private monkeyService: MonkeyService) {
    this.getDataMonkey();
  }

  ngOnInit() {
  }

  private getDataMonkey() {
    this.monkeys = this.monkeyService.getMonkeys().valueChanges();
  }

}
