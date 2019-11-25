import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaDeCorrecaoComponent } from './tela-de-correcao.component';

describe('TelaDeCorrecaoComponent', () => {
  let component: TelaDeCorrecaoComponent;
  let fixture: ComponentFixture<TelaDeCorrecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaDeCorrecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDeCorrecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
