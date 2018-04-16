import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isOpen = false;
  selectedColor = '';
  isOpenFont = false;
  selectedFont='';

  colors = [
    { hex: '#F44336', name: 'Purple' },
    { hex: '#E91E63', name: 'Red' },
    { hex: '#673AB7', name: 'Pink' },
    { hex: '#3F5185', name: 'Indigo' },
    { hex: '#00BCD4', name: 'Cyan' },
    { hex: '#4CAF50', name: 'Green' },
    { hex: '#FFE83B', name: 'Yellow' },
    { hex: '#FF9800', name: 'Orange' },
    { hex: '#795548', name: 'Brown' },
  ];

  fonts=[
    { name: "verdana" },
    { name: "courier" },
    { name: "Comic Sans MS" },
    { name: "Arial Black" },
    { name: "Times New Roman" },
    { name: "Georgia" },
    { name: "Blackadder ITC" }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
