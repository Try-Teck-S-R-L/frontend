import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPreinscripcionDelegadoComponent } from './menu-preinscripcion-delegado.component';

describe('MenuPreinscripcionDelegadoComponent', () => {
  let component: MenuPreinscripcionDelegadoComponent;
  let fixture: ComponentFixture<MenuPreinscripcionDelegadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPreinscripcionDelegadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPreinscripcionDelegadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
