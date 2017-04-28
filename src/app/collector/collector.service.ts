import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Rx';
 import 'rxjs/add/operator/map';
// import {Observable} from 'rxjs/Observable';

@Injectable()
export class CollectorService {
  private url = 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%20from%20rss' +
                '%20where%20url%3D%22http%3A%2F%2Frss.cnn.com%2Frss%2Fedition.rss%3' +
                'Fformat%3Dxml%22&format=json&diagnostics=true&callback=';
  private http;
  constructor(private http_: Http) {
    this.http = http_;
  }

/*  getHeadlines(): string[] {
    return [
      'Lorem ipsum dolor sit amet',
      'consectetuer adipiscing elit',
      'Integer tincidunt Cras dapibus',
      'Quia dolori non voluptas '
    ];
  }*/


  getHeadlines() {
    return this.http_.get(this.url)
      .map(res => res.json())
      .map(data => data.query.results.item);
  }

}
