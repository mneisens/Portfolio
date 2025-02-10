import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


}
