import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAnswersComponent } from './users-answers.component';

describe('UsersAnswersComponent', () => {
  let component: UsersAnswersComponent;
  let fixture: ComponentFixture<UsersAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
