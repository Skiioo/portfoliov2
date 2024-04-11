import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdocComponent } from './webdoc.component';

describe('WebdocComponent', () => {
  let component: WebdocComponent;
  let fixture: ComponentFixture<WebdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebdocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
