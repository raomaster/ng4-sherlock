import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import {Component, OnInit} from '@angular/core';
import {CollectorService} from './collector.service';



@Component({
  selector: 'app-collector',
  templateUrl: './collector.component.html',
  styleUrls: ['./collector.component.css'],
  providers: [CollectorService]
})
export class CollectorComponent implements OnInit {
  caption = 'Algunas noticias siendo investigadas';
  headlines: any[];
  isContainer = true;

  // setting up the item like a observable
  private items: FirebaseListObservable<any>;

  constructor(collectorService: CollectorService, af: AngularFire) {

    this.items = af.database.list('/collector');

    collectorService.getHeadlines()
      .subscribe( data => {
        this.headlines = data;
      });
  }

  ngOnInit() {
  }

  onChange( news, checked: boolean) {
    // console.log(prueba, checked);
    this.items.push({ news });
  }

}
