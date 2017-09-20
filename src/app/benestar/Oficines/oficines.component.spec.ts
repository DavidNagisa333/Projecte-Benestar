import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinesComponent } from './oficines.component';

describe('OficinesComponent', () => {
  let component: OficinesComponent;
  let fixture: ComponentFixture<OficinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OficinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
