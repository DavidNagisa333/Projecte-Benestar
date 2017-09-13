import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JaumeMGComponent } from './jaume-mg.component';

describe('JaumeMGComponent', () => {
  let component: JaumeMGComponent;
  let fixture: ComponentFixture<JaumeMGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaumeMGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JaumeMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
