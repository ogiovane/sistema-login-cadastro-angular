import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaExerciciosComponent } from './lista-exercicios.component';

describe('ListaExerciciosComponent', () => {
  let component: ListaExerciciosComponent;
  let fixture: ComponentFixture<ListaExerciciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaExerciciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaExerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
