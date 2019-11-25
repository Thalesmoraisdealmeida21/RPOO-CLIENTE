import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisaAcertosComponent } from './revisa-acertos.component';

describe('RevisaAcertosComponent', () => {
  let component: RevisaAcertosComponent;
  let fixture: ComponentFixture<RevisaAcertosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisaAcertosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisaAcertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
