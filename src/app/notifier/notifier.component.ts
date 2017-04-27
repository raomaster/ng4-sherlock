import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css']
})
export class NotifierComponent implements OnInit {
  data = {
    collector: 'Coleccionando datos',
    rating: 'Evaluando Datos'
  };

  constructor() {

  }

  ngOnInit() {
  }

}
