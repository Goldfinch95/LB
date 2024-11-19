import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLogoComponent } from './container-logo.component';

describe('ContainerLogoComponent', () => {
  let component: ContainerLogoComponent;
  let fixture: ComponentFixture<ContainerLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
