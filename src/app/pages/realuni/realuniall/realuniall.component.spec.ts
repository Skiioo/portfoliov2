import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealuniallComponent } from './realuniall.component';

describe('RealuniallComponent', () => {
  let component: RealuniallComponent;
  let fixture: ComponentFixture<RealuniallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealuniallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealuniallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
