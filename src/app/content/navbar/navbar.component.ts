import { Component, OnInit } from '@angular/core';
import {OptionService} from '../../providers/option.service';
import {Option} from '../../model/option';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private option = new Option();
  private keyView = 'views';
  constructor(private optionService: OptionService, private app: AppComponent) { }

  ngOnInit() {
  }

  chooseOption(show: number) {
    this.app.show = show;
  }
}
