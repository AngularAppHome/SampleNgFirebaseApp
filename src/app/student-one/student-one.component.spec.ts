import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOneComponent } from './student-one.component';

describe('StudentOneComponent', () => {
  let component: StudentOneComponent;
  let fixture: ComponentFixture<StudentOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
