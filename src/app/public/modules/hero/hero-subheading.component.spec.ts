import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import { StacheHeroSubheadingComponent } from './hero-subheading.component';

describe('StacheHeroSubheadingComponent', () => {
  let fixture: ComponentFixture<StacheHeroSubheadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StacheHeroSubheadingComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StacheHeroSubheadingComponent);
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });
});
