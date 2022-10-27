import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinosFormComponent } from './treinos-form.component';

describe('ExerciciosFormComponent', () => {
  let component: TreinosFormComponent;
  let fixture: ComponentFixture<TreinosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
