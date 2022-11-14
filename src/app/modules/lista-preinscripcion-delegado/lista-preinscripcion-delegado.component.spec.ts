import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPreinscripcionDelegadoComponent } from './lista-preinscripcion-delegado.component';

describe('ListaPreinscripcionDelegadoComponent', () => {
  let component: ListaPreinscripcionDelegadoComponent;
  let fixture: ComponentFixture<ListaPreinscripcionDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPreinscripcionDelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPreinscripcionDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
