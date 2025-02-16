import { Component, Renderer2,AfterViewInit,Inject, PLATFORM_ID,HostListener  } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Portfolio';
 
  constructor(private translate: TranslateService, private renderer: Renderer2,@Inject(PLATFORM_ID) private platformId: Object) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      console.log("AOS wird nur im Browser geladen...");
      import('aos').then((AOS) => {
        console.log("AOS geladen:", AOS); // Debug-Log
        AOS.init({
          duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset : 200,
      // startEvent: 'load',
        });
        AOS.refresh();
      });
    }
    setTimeout(() => {
      AOS.refresh();
    }, 500);
    
  }

  
}
