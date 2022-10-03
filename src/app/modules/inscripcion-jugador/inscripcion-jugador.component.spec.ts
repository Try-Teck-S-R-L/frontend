import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionJugadorComponent } from './inscripcion-jugador.component';

describe('InscripcionJugadorComponent', () => {
  let component: InscripcionJugadorComponent;
  let fixture: ComponentFixture<InscripcionJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcionJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
