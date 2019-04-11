import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import { StachePageHeaderComponent } from './page-header.component';
import { StachePageHeaderTestComponent } from './fixtures/page-header.component.fixture';

describe('StachePageHeaderComponent', () => {
  let fixture: ComponentFixture<StachePageHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StachePageHeaderComponent,
        StachePageHeaderTestComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StachePageHeaderComponent);
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });

  it('should transclude the content', () => {
    const text = 'Header';
    let testFixture = TestBed.createComponent(StachePageHeaderTestComponent);
    let testElement = testFixture.nativeElement;
    testFixture.detectChanges();
    expect(testElement.querySelector('.stache-page-header')).toHaveText(text);
  });
});
