import { AddJobsComponent } from './addjobs.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('AddJobsComponent', () => {
  let component: AddJobsComponent;
  let fixture: ComponentFixture<AddJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddJobsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
