import { Component,Directive, ElementRef, Renderer2, OnInit,AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [
    trigger('slideInAnimation', [
      state('hidden', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('hidden => visible', animate('600ms ease-out'))
    ])
  ]
})


export class AboutMeComponent {
  animationState = 'hidden';

  triggerAnimation(): void {
    this.animationState = 'visible';
  }
}
