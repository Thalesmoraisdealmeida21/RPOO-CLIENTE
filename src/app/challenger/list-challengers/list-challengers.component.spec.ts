import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChallengersComponent } from './list-challengers.component';

describe('ListChallengersComponent', () => {
  let component: ListChallengersComponent;
  let fixture: ComponentFixture<ListChallengersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListChallengersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChallengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
