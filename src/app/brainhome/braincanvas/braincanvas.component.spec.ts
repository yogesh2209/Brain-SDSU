import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BraincanvasComponent } from './braincanvas.component';

describe('BraincanvasComponent', () => {
  let component: BraincanvasComponent;
  let fixture: ComponentFixture<BraincanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BraincanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BraincanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
