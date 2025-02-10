import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy-policy', component: LegalNoticeComponent },
    { path: 'main', component: MainComponent },


{ path: '', component: MainComponent, pathMatch: 'full' }
];

