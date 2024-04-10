import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMagazinComponent } from './slider-magazin.component';

describe('SliderMagazinComponent', () => {
  let component: SliderMagazinComponent;
  let fixture: ComponentFixture<SliderMagazinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderMagazinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderMagazinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
