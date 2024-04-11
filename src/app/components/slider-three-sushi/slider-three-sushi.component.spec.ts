import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderThreeSushiComponent } from './slider-three-sushi.component';

describe('SliderThreeSushiComponent', () => {
  let component: SliderThreeSushiComponent;
  let fixture: ComponentFixture<SliderThreeSushiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderThreeSushiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderThreeSushiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
