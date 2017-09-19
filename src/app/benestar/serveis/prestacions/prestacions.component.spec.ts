import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestacionsComponent } from './prestacions.component';

describe('PrestacionsComponent', () => {
  let component: PrestacionsComponent;
  let fixture: ComponentFixture<PrestacionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestacionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestacionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
