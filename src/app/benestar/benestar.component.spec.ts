import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenestarComponent } from './benestar.component';

describe('BenestarComponent', () => {
  let component: BenestarComponent;
  let fixture: ComponentFixture<BenestarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenestarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
