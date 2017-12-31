import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicingComponent } from './slicing.component';

describe('SlicingComponent', () => {
  let component: SlicingComponent;
  let fixture: ComponentFixture<SlicingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlicingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
