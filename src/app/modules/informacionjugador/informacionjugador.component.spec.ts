import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionjugadorComponent } from './informacionjugador.component';

describe('InformacionjugadorComponent', () => {
  let component: InformacionjugadorComponent;
  let fixture: ComponentFixture<InformacionjugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionjugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionjugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
