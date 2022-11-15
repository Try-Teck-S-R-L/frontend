import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPreDeleComponent } from './informacion-pre-dele.component';

describe('InformacionPreDeleComponent', () => {
  let component: InformacionPreDeleComponent;
  let fixture: ComponentFixture<InformacionPreDeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionPreDeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPreDeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
