import { Component, OnInit, ViewChild } from '@angular/core';

import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource, MatSort } from '@angular/material'
import { DataService } from '../data.service';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {
  displayedColumns = ['speakerName', 'talkName', 'date'];
  data = [];
  dataSource = null;

  @ViewChild(MatSort) sort: MatSort;
  
  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getAll();
    this.dataSource = new MatTableDataSource(this.data);
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


