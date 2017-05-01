import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { SkyModule } from '@blackbaud/skyux/dist/core';
import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';
import { SkyAppWindowRef } from '@blackbaud/skyux-builder/runtime';

import { StacheGridModule } from '../grid/grid.module';
import { StacheActionButtonsComponent } from './action-buttons.component';

describe('StacheActionButtonsComponent', () => {
  let component: StacheActionButtonsComponent;
  let fixture: ComponentFixture<StacheActionButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SkyModule,
        StacheGridModule,
        RouterTestingModule
      ],
      declarations: [
        StacheActionButtonsComponent
      ],
      providers: [
        SkyAppWindowRef
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StacheActionButtonsComponent);
    component = fixture.componentInstance;
  });

  it('should render the component', () => {
    expect(fixture).toExist();
  });

  it('should display action buttons', () => {
    component.routes = [{
      name: 'Test',
      icon: 'fa-circle',
      summary: '',
      path: []
    }];

    fixture.detectChanges();
    const actionButtons = fixture.debugElement.queryAll(By.css('.sky-action-button'));

    expect(actionButtons.length).toBe(1);
  });
});