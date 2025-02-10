import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { log } from 'console';
import { timeInterval } from 'rxjs';


@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  currentLang: string;

  constructor(private translateService: TranslateService) {
    this.currentLang = this.translateService.currentLang || 'en';
    
    this.translateService.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
    
    this.translateService.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }
}
