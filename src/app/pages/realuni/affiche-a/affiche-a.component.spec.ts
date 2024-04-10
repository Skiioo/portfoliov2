import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheAComponent } from './affiche-a.component';

describe('AfficheAComponent', () => {
  let component: AfficheAComponent;
  let fixture: ComponentFixture<AfficheAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfficheAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AfficheAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
