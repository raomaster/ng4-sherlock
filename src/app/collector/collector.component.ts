import {Component, OnInit} from '@angular/core';
import {CollectorService} from './collector.service';


@Component({
  selector: 'app-collector',
  templateUrl: './collector.component.html',
  styleUrls: ['./collector.component.css'],
  providers: [CollectorService]
})
export class CollectorComponent implements OnInit {
  caption = 'Some news worth investigating';
  headlines;
  isContainer = true;

  constructor(collectorService: CollectorService) {
    this.headlines = collectorService.getHeadlines();
  }

  ngOnInit() {
  }

  onChange( prueba: any , checked: boolean) {
    console.log(prueba, checked);
  }

}
