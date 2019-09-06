import { Component, OnInit } from '@angular/core';
import {MonkeyService} from '../../providers/monkey.service';
import {Monkey} from '../../model/monkey';

@Component({
  selector: 'app-monkey-list',
  templateUrl: './monkey-list.component.html',
  styleUrls: ['./monkey-list.component.css']
})
export class MonkeyListComponent implements OnInit {
  private monkeyList: any[];

  constructor(private monkeyService: MonkeyService) { }

  ngOnInit() {
    this.getDataMonkey();
  }

  private getDataMonkey() {
    this.monkeyService.getMonkeys().snapshotChanges().subscribe(data => {
      this.monkeyList = [];
      data.forEach(d => {
        const x = d.payload.toJSON();
        if (x['key'] === 'key...') x['key'] = 'generating Key...';
        this.monkeyList.push(x as Monkey);
      });
      // acá se inicializa dtT
    });
  }

}
