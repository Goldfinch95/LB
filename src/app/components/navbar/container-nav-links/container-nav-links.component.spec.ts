import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerNavLinksComponent } from './container-nav-links.component';

describe('ContainerNavLinksComponent', () => {
  let component: ContainerNavLinksComponent;
  let fixture: ComponentFixture<ContainerNavLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerNavLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerNavLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
