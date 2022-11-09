import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaItensComponent } from './ficha-itens.component';

describe('FichaItensComponent', () => {
  let component: FichaItensComponent;
  let fixture: ComponentFixture<FichaItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FichaItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
