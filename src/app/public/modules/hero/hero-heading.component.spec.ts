import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import {
  StacheHeroHeadingComponent
} from './hero-heading.component';

import {
  StacheHeroModule
} from './hero.module';

describe('StacheHeroHeadingComponent', () => {
  let fixture: ComponentFixture<StacheHeroHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StacheHeroModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StacheHeroHeadingComponent);
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });
});
