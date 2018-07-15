import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobMatchComponent } from './job-match.component';

describe('JobMatchComponent', () => {
  let component: JobMatchComponent;
  let fixture: ComponentFixture<JobMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
