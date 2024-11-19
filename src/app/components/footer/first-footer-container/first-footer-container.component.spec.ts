import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFooterContainerComponent } from './first-footer-container.component';

describe('FirstFooterContainerComponent', () => {
  let component: FirstFooterContainerComponent;
  let fixture: ComponentFixture<FirstFooterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstFooterContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstFooterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
