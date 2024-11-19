import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondFooterContainerComponent } from './second-footer-container.component';

describe('SecondFooterContainerComponent', () => {
  let component: SecondFooterContainerComponent;
  let fixture: ComponentFixture<SecondFooterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondFooterContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondFooterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
