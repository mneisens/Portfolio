import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { log } from 'console';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule,CommonModule,TranslateModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent {
  http = inject(HttpClient);
  showSuccessMessage = false;
  private successTimeout: any;

   /**
   * Flag for testing the mail sending without executing an actual HTTP request.
   *
   * @type {boolean}
   */
  contactData = {
    name: '',
    email: '',
    message: '',
    policy: false
  }

   /**
   * Flag for testing the mail sending without executing an actual HTTP request.
   *
   * @type {boolean}
   */
  mailTest = false; 

    /**
   * Processes the form submission.
   *
   * If the form is valid, an HTTP POST request is sent unless mailTest is enabled.
   * In test mode (mailTest enabled), only the success message is displayed and the form is reset.
   *
   * @param {NgForm} ngForm - The Angular form instance containing the form data.
   * @returns {void}
   */
  post = {
    endPoint: 'https://www.michael-neisens.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      }
    }
  };

  /**
   * Processes the form submission.
   *
   * If the form is valid, an HTTP POST request is sent unless mailTest is enabled.
   * In test mode (mailTest enabled), only the success message is displayed and the form is reset.
   *
   * @param {NgForm} ngForm - The Angular form instance containing the form data.
   * @returns {void}
   */
  onSubmit(ngForm: NgForm) {   
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {      
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: () => {
            this.displaySuccessMessage();/** */
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          // complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.displaySuccessMessage();/* */
      ngForm.resetForm();
    }
  }

  /**
   * Closes the success message immediately and clears the timeout.
   *
   * @returns {void}
   */
  displaySuccessMessage() {
    this.showSuccessMessage = true;
    this.successTimeout = setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000);
  }

  /**
   * Closes the success message immediately and clears the timeout.
   *
   * @returns {void}
   */
  closeMessage() {
    this.showSuccessMessage = false;
    if (this.successTimeout) {
      clearTimeout(this.successTimeout);
    }
  }
}
