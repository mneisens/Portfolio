import { Routes,RouterModule } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactformComponent } from './contactform/contactform.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy-policy', component: LegalNoticeComponent },
    { path: 'main', component: MainComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'my-skills', component: MySkillsComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactformComponent },

{ path: '', component: MainComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }