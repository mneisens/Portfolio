import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {}
  menuOpen: boolean = false;

  /**
 * Toggles the state of the navigation menu.
 *
 * @returns {void}
 */
toggleMenu() {
  this.menuOpen = !this.menuOpen;
}

 /**
   * Closes the navigation menu.
   *
   * @returns {void}
   */
closeMenu() {
  this.menuOpen = false;
}

/**
 * Changes the application's language.
 *
 * @param {string} lang - The language code to switch to.
 * @returns {void}
 */
changeLanguage(lang: string) {
  this.translate.use(lang);
}

/**
 * Flag indicating whether the flag icon should be displayed.
 *
 * @type {boolean}
 */
showFlag: boolean =true;

  /**
 * Toggles the visibility of the flag icon.
 *
 * @returns {void}
 */
toogleLanguage(){
  this.showFlag = !this.showFlag;
}
}
