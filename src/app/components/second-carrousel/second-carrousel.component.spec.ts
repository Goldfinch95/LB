import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCarrouselComponent } from './second-carrousel.component';

describe('SecondCarrouselComponent', () => {
  let component: SecondCarrouselComponent;
  let fixture: ComponentFixture<SecondCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondCarrouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
