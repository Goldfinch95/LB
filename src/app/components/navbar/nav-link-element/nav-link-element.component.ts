import { Component, Input } from '@angular/core';
import { NavLinkElement } from '../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-link-element',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-link-element.component.html',
  styleUrl: './nav-link-element.component.css',
})
export class NavLinkElementComponent {
  @Input() navLinkElement: NavLinkElement = {
    name: '',
    path: '',
  };
}
