import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-container',
  standalone: true,
  imports: [],
  templateUrl: './title-container.component.html',
  styleUrl: './title-container.component.css'
})
export class TitleContainerComponent {
  @Input() title: string = '';
}
