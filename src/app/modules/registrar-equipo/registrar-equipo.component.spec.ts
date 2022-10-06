import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEquipoComponent } from './registrar-equipo.component';

describe('RegistrarEquipoComponent', () => {
  let component: RegistrarEquipoComponent;
  let fixture: ComponentFixture<RegistrarEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
