import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  // Create event emitter: send out information as a string
  @Output() submitted = new EventEmitter<string>(); // typescript generic annotation
  term = '';

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
