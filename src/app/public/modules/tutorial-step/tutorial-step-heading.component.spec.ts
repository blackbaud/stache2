import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import {
  expect
} from '@skyux-sdk/testing';

import { StacheTutorialStepHeadingComponent } from './tutorial-step-heading.component';

describe('StacheTutorialStepHeadingComponent', () => {
  let fixture: ComponentFixture<StacheTutorialStepHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StacheTutorialStepHeadingComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StacheTutorialStepHeadingComponent);
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });
});
