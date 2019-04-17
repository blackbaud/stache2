import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import { StacheIncludeComponent } from './include.component';

describe('StacheIncludeComponent', () => {
  let fixture: ComponentFixture<StacheIncludeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StacheIncludeComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StacheIncludeComponent);
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });
});
