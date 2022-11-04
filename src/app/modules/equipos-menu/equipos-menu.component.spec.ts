import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposMenuComponent } from './equipos-menu.component';

describe('EquiposMenuComponent', () => {
  let component: EquiposMenuComponent;
  let fixture: ComponentFixture<EquiposMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiposMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
