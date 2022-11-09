import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredencialesInternasComponent } from './credenciales-internas.component';

describe('CredencialesInternasComponent', () => {
  let component: CredencialesInternasComponent;
  let fixture: ComponentFixture<CredencialesInternasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredencialesInternasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredencialesInternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
