import { CommonModule, NgFor } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule,NgFor, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent{
  projects = [
    {
      title: 'Join',
      techStack: 'Angular | TypeScript | HTML | CSS | Firebase',
      translateKey: 'JOIN',
      image: '/assets/img/Portfolio/Pollo loco 2.png',
      imageBottom: '/assets/img/Portfolio/Pollo loco 5.png',
      liveLink: 'https://www.michael-neisens.de/Join/log_in.html',
      githubLink: 'https://github.com/mneisens/Join'
    },
    {
      title: 'El Pollo Loco',
      techStack: 'JavaScript | HTML | CSS',
      translateKey: 'EL_POLLO_LOCO',
      image: '/assets/img/Portfolio/Pollo loco 1.png',
      imageBottom: '/assets/img/Portfolio/Pollo loco 2.png',
      liveLink: 'https://www.michael-neisens.de/El_Pollo_Loco/index.html',
      githubLink: 'https://github.com/mneisens/EL-Pollo-Loco'
    },
    {
      title: 'Coderr',
      techStack: 'DRF | Python | Django',
      translateKey: 'CODERR',
      image: '/assets/img/Portfolio/Coderr.png',
      imageBottom: '', 
      liveLink: 'https://michael-neisens.de/Coderr/index.html',
      githubLink: 'https://github.com/mneisens/Coderr_Backend'
    }
  ];

  openLink(link: string): void {
    if (link && link !== '#') {
      window.open(link, '_blank');
    }
  }


}
