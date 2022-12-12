import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEsperaComponent } from './vista-espera.component';

describe('VistaEsperaComponent', () => {
  let component: VistaEsperaComponent;
  let fixture: ComponentFixture<VistaEsperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEsperaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
