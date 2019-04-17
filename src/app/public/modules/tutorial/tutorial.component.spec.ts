import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import { StacheTutorialComponent } from './tutorial.component';

describe('StacheTutorialComponent', () => {
  let fixture: ComponentFixture<StacheTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StacheTutorialComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StacheTutorialComponent);
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });
});
