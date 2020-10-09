import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  // dependency injection: pass in http instance as constructor parameter
  constructor(private http: HttpClient) {}

  search(term: string) {
    // access the injected http dependency
    return this.http.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*', // CORS
      },
      // https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${term}
    });
  }
}
