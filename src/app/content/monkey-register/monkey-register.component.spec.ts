import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyRegisterComponent } from './monkey-register.component';

describe('MonkeyRegisterComponent', () => {
  let component: MonkeyRegisterComponent;
  let fixture: ComponentFixture<MonkeyRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkeyRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
