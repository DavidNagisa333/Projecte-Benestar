mport { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SergiComponent } from './sergi.component';

describe('SergiComponent', () => {
  let component: SergiComponent;
  let fixture: ComponentFixture<SergiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SergiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SergiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
