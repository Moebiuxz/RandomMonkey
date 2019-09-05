import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyListComponent } from './monkey-list.component';

describe('MonkeyListComponent', () => {
  let component: MonkeyListComponent;
  let fixture: ComponentFixture<MonkeyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonkeyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonkeyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
