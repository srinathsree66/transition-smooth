import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionSmoothComponent } from './transition-smooth.component';

describe('TransitionSmoothComponent', () => {
  let component: TransitionSmoothComponent;
  let fixture: ComponentFixture<TransitionSmoothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransitionSmoothComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransitionSmoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
