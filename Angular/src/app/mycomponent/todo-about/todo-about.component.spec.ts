import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAboutComponent } from './todo-about.component';

describe('TodoAboutComponent', () => {
  let component: TodoAboutComponent;
  let fixture: ComponentFixture<TodoAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
