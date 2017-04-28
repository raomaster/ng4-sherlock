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

  constructor(collectorService: CollectorService) {
    collectorService.getHeadlines()
      .subscribe( data => {
        this.headlines = data;
      });
  }

  ngOnInit() {
  }

  onChange( prueba: any , checked: boolean) {
    console.log(prueba, checked);
  }

}
