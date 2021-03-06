import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorWindowComponent } from './mentor-window.component';

describe('MentorWindowComponent', () => {
  let component: MentorWindowComponent;
  let fixture: ComponentFixture<MentorWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
