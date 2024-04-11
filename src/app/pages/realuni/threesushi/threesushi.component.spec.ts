import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreesushiComponent } from './threesushi.component';

describe('ThreesushiComponent', () => {
  let component: ThreesushiComponent;
  let fixture: ComponentFixture<ThreesushiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreesushiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreesushiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
