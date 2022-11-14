import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPreinscripcionDelegadoComponent } from './eliminar-preinscripcion-delegado.component';

describe('EliminarPreinscripcionDelegadoComponent', () => {
  let component: EliminarPreinscripcionDelegadoComponent;
  let fixture: ComponentFixture<EliminarPreinscripcionDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPreinscripcionDelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPreinscripcionDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
