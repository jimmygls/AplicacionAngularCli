/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PiepaginaComponent } from './piepagina.component';

describe('PiepaginaComponent', () => {
  let component: PiepaginaComponent;
  let fixture: ComponentFixture<PiepaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiepaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiepaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
