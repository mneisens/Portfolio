import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { ContactformComponent } from '../contactform/contactform.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ReferencesComponent } from '../references/references.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AboveTheFoldComponent,AboutMeComponent,ContactformComponent,MySkillsComponent,PortfolioComponent,ReferencesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
