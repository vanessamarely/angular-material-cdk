import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Angular week';
  selectedData = null;
  cardIsVisible = false;
  data = [];
  
  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getAll();
  }

  showDetails(data){
    this.selectedData = data;
    this.cardIsVisible = true;
  }


  
}
