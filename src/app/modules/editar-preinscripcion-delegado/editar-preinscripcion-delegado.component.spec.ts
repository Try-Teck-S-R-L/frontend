import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPreinscripcionDelegadoComponent } from './editar-preinscripcion-delegado.component';

describe('EditarPreinscripcionDelegadoComponent', () => {
  let component: EditarPreinscripcionDelegadoComponent;
  let fixture: ComponentFixture<EditarPreinscripcionDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPreinscripcionDelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPreinscripcionDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
