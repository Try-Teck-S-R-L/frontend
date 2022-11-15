import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPreDeleComponent } from './editar-pre-dele.component';

describe('EditarPreDeleComponent', () => {
  let component: EditarPreDeleComponent;
  let fixture: ComponentFixture<EditarPreDeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPreDeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPreDeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
