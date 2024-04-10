import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAfficheComponent } from './slider-affiche.component';

describe('SliderAfficheComponent', () => {
  let component: SliderAfficheComponent;
  let fixture: ComponentFixture<SliderAfficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderAfficheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
