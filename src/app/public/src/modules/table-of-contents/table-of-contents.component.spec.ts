import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';
import { StacheTableOfContentsComponent } from './table-of-contents.component';
import { StacheNavLink } from '../nav';

describe('StacheTableOfContentsComponent', () => {
  let component: StacheTableOfContentsComponent;
  let fixture: ComponentFixture<StacheTableOfContentsComponent>;

  const route: StacheNavLink = {
    name: 'string',
    path: '/test',
    offsetTop: 100,
    isCurrent: false
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StacheTableOfContentsComponent
      ],
      imports: [
        RouterTestingModule
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StacheTableOfContentsComponent);
    component = fixture.componentInstance;
    component.routes = [route];
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });
});
