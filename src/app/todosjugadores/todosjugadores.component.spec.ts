import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosjugadoresComponent } from './todosjugadores.component';

describe('TodosjugadoresComponent', () => {
  let component: TodosjugadoresComponent;
  let fixture: ComponentFixture<TodosjugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosjugadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosjugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
