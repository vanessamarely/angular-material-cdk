import { Component, OnInit, ViewChild } from '@angular/core';

import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource, MatSort } from '@angular/material'

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {
  displayedColumns = ['speaker', 'name', 'schedule'];
  
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}


const ELEMENT_DATA  = [
  { speaker: 'Carlos Rojas', speakerImage: '../../assets/images/speakers/carlos.jpg', name: 'Arquitectura de Apps escalables en Angular', schedule: 'Tue- 05:30pm - 6:30pm'},
  { speaker: 'Vanessa Aristizabal', speakerImage: '../../assets/images/speakers/vanessa.jpg', name: 'Angular Material', schedule: 'Tue- 06:30 pm - 7:30pm'},
  { speaker: 'Juan Tobon', speakerImage: '../../assets/images/speakers/juantobon.jpg', name: 'De Reactive Forms y Otras Delicias', schedule: 'Wed- 05:30pm - 6:30pm'},
  { speaker: 'Carlos Angulo', speakerImage: '../../assets/images/speakers/carlosangulo.png', name: 'Let\'s build your Angular Animations', schedule: 'Wed- 06:30 pm - 7:30pm'},
  { speaker: 'Juan Vasquez', speakerImage: '../../assets/images/speakers/juanfe.jpg', name: 'Patrones arquitectónicos de CSS para Angular', schedule: 'Thur- 05:30 pm'},
  { speaker: 'Laura Ciro', speakerImage: '../../assets/images/speakers/laura.jpeg', name: 'Change Detection en Angular', schedule: 'Thur- 06:30 pm - 7:30pm'},
  { speaker: 'Sergio Valencia', speakerImage: '../../assets/images/speakers/sergio.jpg', name: 'Arquitectura de Datos con Observables.', schedule: 'Frid- 05:30pm - 6:30pm'},
  { speaker: 'Alvaro Agamez', speakerImage: '../../assets/images/speakers/alvaro.jpg', name: 'Observable Data Services', schedule: 'Frid- 06:30 pm - 7:30pm'},
  { speaker: 'Sebastian Gomez', speakerImage: '../../assets/images/speakers/sebastian.jpg', name: 'IONIC + TDD + PWA', schedule: 'Sat- 09:00 am - 01:00 pm'},
];