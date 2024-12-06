import { Component, OnInit } from '@angular/core';
import { ContainerLogoComponent } from './container-logo';
import { ContainerNavLinksComponent } from './container-nav-links';
import { NgClass } from '@angular/common';
import { WindowSizeService } from '../../services/window-size.service';
import { NavLinkElementComponent } from "./nav-link-element/nav-link-element.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ContainerLogoComponent, ContainerNavLinksComponent, NgClass,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  navbarCollapsed = true;
  isLargeScreen = false;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  
  constructor(private windowSizeService: WindowSizeService) {}

  
  ngOnInit() {
    
    this.windowSizeService.windowWidth$.subscribe((width) => {
      this.isLargeScreen = width > 991; 
    });
  }
}
