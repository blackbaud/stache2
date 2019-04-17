import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import { StacheContainerComponent } from './container.component';

describe('StacheContainerComponent', () => {
  let fixture: ComponentFixture<StacheContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StacheContainerComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StacheContainerComponent);
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });
});
