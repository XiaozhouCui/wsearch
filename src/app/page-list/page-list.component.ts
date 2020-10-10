import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  @Input() pages = [];
  // simulate XSS attack
  xss = '<IMG SRC="javascript:alert(\'XSS\');" />';

  constructor() {}

  ngOnInit(): void {}
}
