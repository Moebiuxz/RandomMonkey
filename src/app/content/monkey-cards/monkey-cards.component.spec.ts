import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyCardsComponent } from './monkey-cards.component';

describe('MonkeyCardsComponent', () => {
  let component: MonkeyCardsComponent;
  let fixture: ComponentFixture<MonkeyCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkeyCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
