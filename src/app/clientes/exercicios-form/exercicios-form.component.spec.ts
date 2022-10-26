import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosFormComponent } from './exercicios-form.component';

describe('ExerciciosFormComponent', () => {
  let component: ExerciciosFormComponent;
  let fixture: ComponentFixture<ExerciciosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciciosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciciosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
