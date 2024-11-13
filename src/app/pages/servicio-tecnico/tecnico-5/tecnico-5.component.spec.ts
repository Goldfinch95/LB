import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tecnico5Component } from './tecnico-5.component';

describe('Tecnico5Component', () => {
  let component: Tecnico5Component;
  let fixture: ComponentFixture<Tecnico5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tecnico5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tecnico5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
