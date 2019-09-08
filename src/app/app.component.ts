import { Component } from '@angular/core';
import {OptionService} from './providers/option.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'RandomMonkey';
  public show: any;

  constructor(private optionService: OptionService) {
    this.show = 3;
  }
}
