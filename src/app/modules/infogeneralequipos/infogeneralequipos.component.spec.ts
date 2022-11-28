/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InfogeneralequiposComponent } from './infogeneralequipos.component';

describe('InfogeneralequiposComponent', () => {
  let component: InfogeneralequiposComponent;
  let fixture: ComponentFixture<InfogeneralequiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfogeneralequiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfogeneralequiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
