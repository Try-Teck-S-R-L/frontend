import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionequiposComponent } from './informacionequipos.component';

describe('InformacionequiposComponent', () => {
  let component: InformacionequiposComponent;
  let fixture: ComponentFixture<InformacionequiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionequiposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
