import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';
// import { Observable } from 'rxjs';

// // Use TypeScript CLASS GENERICS to pass value type to observer

// interface Car {
//   year: number;
//   color: string;
//   running: boolean;
//   make: {
//     name: string;
//     dateCreated: number;
//   };
// }

// const observable = new Observable<Car>((observer) => {
//   observer.next({
//     year: 2000,
//     color: 'red',
//     running: true,
//     make: {
//       name: 'Chevy',
//       dateCreated: 1950,
//     },
//   });
// }).pipe(pluck('make', 'dateCreated'));

// // "value" type is assumed to be the type of "dateCreated" (number)
// observable.subscribe((value) => {
//   console.log(value);
// });

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[]; // res.query.search is an array of objects
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  // dependency injection: pass in http instance as constructor parameter
  constructor(private http: HttpClient) {}

  search(term: string) {
    // access the injected http dependency
    // http.get() returns an RxJs observable
    return (
      this.http
        // generic function annotation
        .get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            format: 'json',
            list: 'search',
            utf8: '1',
            srsearch: term,
            origin: '*', // CORS
          },
          // https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${term}
        })
        .pipe(pluck('query', 'search'))
    ); // RxJs "pluck" operator to pickup res.query.search, with interface <WikipediaResponse>
  }
}
