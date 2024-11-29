import { Component, Input, OnInit } from '@angular/core';
import { WindowSizeService } from '../../services/window-size.service';

@Component({
  selector: 'app-title-container',
  standalone: true,
  imports: [],
  templateUrl: './title-container.component.html',
  styleUrl: './title-container.component.css'
})
export class TitleContainerComponent implements OnInit {
  @Input() title: string = '';
  isLargeScreen = false;

  constructor(private windowSizeService: WindowSizeService) {}

  
  ngOnInit() {
    
    this.windowSizeService.windowWidth$.subscribe((width) => {
      this.isLargeScreen = width > 750; 
    });
  }
}
