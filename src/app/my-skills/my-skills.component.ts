import { Component, OnInit,AfterViewInit,Inject, PLATFORM_ID,HostListener  } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent { 
  currentLang: string;

  constructor(private translateService: TranslateService) {
    this.currentLang = this.translateService.currentLang || 'en';
    
    this.translateService.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }
 
  // ngAfterViewInit() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     console.log("AOS wird nur im Browser geladen...");
  //     import('aos').then((AOS) => {
  //       console.log("AOS geladen:", AOS); // Debug-Log
  //       AOS.init({
  //         duration: 1000,
  //         once: false
  //       });
  //       AOS.refresh();
  //     });
  //   }
  // }
  
}


