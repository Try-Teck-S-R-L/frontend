import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarjugadoresComponent } from './eliminarjugadores.component';

describe('EliminarjugadoresComponent', () => {
  let component: EliminarjugadoresComponent;
  let fixture: ComponentFixture<EliminarjugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarjugadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarjugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
