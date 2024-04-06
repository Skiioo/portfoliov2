import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealpersoallComponent } from './realpersoall.component';

describe('RealpersoallComponent', () => {
  let component: RealpersoallComponent;
  let fixture: ComponentFixture<RealpersoallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealpersoallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealpersoallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
