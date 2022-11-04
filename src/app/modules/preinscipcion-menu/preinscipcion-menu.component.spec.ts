import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreinscipcionMenuComponent } from './preinscipcion-menu.component';

describe('PreinscipcionMenuComponent', () => {
  let component: PreinscipcionMenuComponent;
  let fixture: ComponentFixture<PreinscipcionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreinscipcionMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreinscipcionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
