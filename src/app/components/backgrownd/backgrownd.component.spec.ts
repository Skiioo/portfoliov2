import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgrowndComponent } from './backgrownd.component';

describe('BackgrowndComponent', () => {
  let component: BackgrowndComponent;
  let fixture: ComponentFixture<BackgrowndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackgrowndComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackgrowndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
