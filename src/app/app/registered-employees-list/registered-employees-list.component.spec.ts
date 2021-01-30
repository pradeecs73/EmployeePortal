import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredEmployeesListComponent } from './registered-employees-list.component';

describe('RegisteredEmployeesListComponent', () => {
  let component: RegisteredEmployeesListComponent;
  let fixture: ComponentFixture<RegisteredEmployeesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredEmployeesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredEmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
