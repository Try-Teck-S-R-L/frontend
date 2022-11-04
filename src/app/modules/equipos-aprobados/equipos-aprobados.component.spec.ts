import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposAprobadosComponent } from './equipos-aprobados.component';

describe('EquiposAprobadosComponent', () => {
  let component: EquiposAprobadosComponent;
  let fixture: ComponentFixture<EquiposAprobadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiposAprobadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposAprobadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
