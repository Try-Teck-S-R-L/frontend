import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEquipoGeneralComponent } from './info-equipo-general.component';

describe('InfoEquipoGeneralComponent', () => {
  let component: InfoEquipoGeneralComponent;
  let fixture: ComponentFixture<InfoEquipoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEquipoGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEquipoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
