import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  currentIndex =0;
  
  reviews = [
    {
      text: 'REFERENCE1',
      img: '/assets/img/References/profil/Frame 280.png',
      author: 'V.Schuster - Team Partner'
    },
    {
      text: 'REFERENCE2',
      img: '/assets/img/References/profil/Frame 281.png',
      author: 'E.Eichinger - Team Partner'
    },
    {
      text: 'REFERENCE3',
      img: '/assets/img/References/profil/Frame 282.png',
      author: 'I.Nuber - Frontend Engineer'
    }
  ]

  nextReview(){
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
  }

  prevReview(){
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
  }
}
