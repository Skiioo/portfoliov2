import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheICDComponent } from './affiche-icd.component';

describe('AfficheICDComponent', () => {
  let component: AfficheICDComponent;
  let fixture: ComponentFixture<AfficheICDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfficheICDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfficheICDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
