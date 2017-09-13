import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaumeCComponent } from './jaume-c.component';

describe('JaumeCComponent', () => {
  let component: JaumeCComponent;
  let fixture: ComponentFixture<JaumeCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaumeCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaumeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
