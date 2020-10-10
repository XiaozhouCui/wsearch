import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    // wikipedia.search(term) catches the value (pages) emitted from RxJs Observable's pipeline/operators
    // "pages" already got the type from interface <WikipediaResponse>
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
    });
  }
}
