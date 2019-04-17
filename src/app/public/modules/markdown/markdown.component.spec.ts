import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  expect
} from '@skyux-sdk/testing';

import { StacheMarkdownComponent } from './markdown.component';

describe('StacheMarkdownComponent', () => {
  let fixture: ComponentFixture<StacheMarkdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StacheMarkdownComponent
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StacheMarkdownComponent);
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });
});
