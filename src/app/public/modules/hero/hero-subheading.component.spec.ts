import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import {
  StacheHeroSubheadingComponent
} from './hero-subheading.component';

import {
  StacheHeroModule
} from './hero.module';

describe('StacheHeroSubheadingComponent', () => {
  let fixture: ComponentFixture<StacheHeroSubheadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StacheHeroModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StacheHeroSubheadingComponent);
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });
});
