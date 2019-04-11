import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import { StacheTutorialStepBodyComponent } from './tutorial-step-body.component';

describe('StacheTutorialStepBodyComponent', () => {
  let fixture: ComponentFixture<StacheTutorialStepBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StacheTutorialStepBodyComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StacheTutorialStepBodyComponent);
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });
});
