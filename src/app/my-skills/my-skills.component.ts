import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent  { 
  currentLang: string;

  constructor(private translateService: TranslateService) {
    this.currentLang = this.translateService.currentLang || 'en';
    
    this.translateService.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }


}
