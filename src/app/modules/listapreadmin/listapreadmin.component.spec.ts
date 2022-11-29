import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapreadminComponent } from './listapreadmin.component';

describe('ListapreadminComponent', () => {
  let component: ListapreadminComponent;
  let fixture: ComponentFixture<ListapreadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListapreadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapreadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
