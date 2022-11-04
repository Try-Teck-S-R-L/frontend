import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiequipoComponent } from './miequipo.component';

describe('MiequipoComponent', () => {
  let component: MiequipoComponent;
  let fixture: ComponentFixture<MiequipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiequipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiequipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
