import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  DebugElement
} from '@angular/core';

import {
  expect
} from '@skyux-sdk/testing';

import {
   StacheVideoComponent
  } from './video.component';

import {
  StacheVideoModule
} from './video.module';

describe('StacheVideoComponent', () => {
  let component: StacheVideoComponent;
  let fixture: ComponentFixture<StacheVideoComponent>;
  let debugElement: DebugElement;
  let videoSource = 'https://google.com';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StacheVideoModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StacheVideoComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });

  it('should have a videoSource input', () => {
    component.videoSource = videoSource;
    fixture.detectChanges();
    expect(component.videoSource).toBe(videoSource);
  });

  it('should sanitize the source URL on init', () => {
    component.videoSource = videoSource;
    component.ngOnInit();
    fixture.detectChanges();
    let src = debugElement.nativeElement.querySelector('iframe').getAttribute('src');

    expect(src).toBe(videoSource);
  });

});
