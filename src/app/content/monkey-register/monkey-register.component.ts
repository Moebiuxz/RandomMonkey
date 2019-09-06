import { Component, OnInit } from '@angular/core';
import {MonkeyService} from '../../providers/monkey.service';
import {Monkey} from '../../model/monkey';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-monkey-register',
  templateUrl: './monkey-register.component.html',
  styleUrls: ['./monkey-register.component.css']
})
export class MonkeyRegisterComponent implements OnInit {

  constructor(private monkeyService: MonkeyService) { }

  ngOnInit() {
  }

  onSubmit(monkeyForm: NgForm) {
    if (monkeyForm.value.key == null) {
      console.log('nuevo');
      monkeyForm.value.key = 'key...';
      this.monkeyService.addMonkey(monkeyForm.value);
    } else {
      console.log('edit');
      this.monkeyService.updateMonkey(monkeyForm.value.key, monkeyForm.value);
    }
    this.resetForm(monkeyForm);
  }

  private resetForm(monkeyForm?: NgForm) {
    if (monkeyForm != null) {
      monkeyForm.reset();
      this.monkeyService.selectedMonkey = new Monkey();
    }
  }
}
