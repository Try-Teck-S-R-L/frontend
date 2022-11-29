import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoJugadoresGeneralComponent } from './info-jugadores-general.component';

describe('InfoJugadoresGeneralComponent', () => {
  let component: InfoJugadoresGeneralComponent;
  let fixture: ComponentFixture<InfoJugadoresGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoJugadoresGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoJugadoresGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
