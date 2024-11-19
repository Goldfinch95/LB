import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinkElementComponent } from './nav-link-element.component';

describe('NavLinkElementComponent', () => {
  let component: NavLinkElementComponent;
  let fixture: ComponentFixture<NavLinkElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLinkElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavLinkElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
