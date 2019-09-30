import { TitleService } from './services/title.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private titleService: TitleService) {
  }
  
  ngOnInit(): void {
    this.titleService.init();
  }
}
