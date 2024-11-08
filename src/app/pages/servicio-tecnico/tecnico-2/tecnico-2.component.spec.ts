import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tecnico2Component } from './tecnico-2.component';

describe('Tecnico2Component', () => {
  let component: Tecnico2Component;
  let fixture: ComponentFixture<Tecnico2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tecnico2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tecnico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
