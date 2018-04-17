import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatToolbarModule, 
  MatInputModule, 
  MatProgressSpinnerModule, 
  MatCardModule, 
  MatIconModule,
  MatTableModule,
  MatPaginatorModule, 
  MatSortModule  
} from '@angular/material';

@NgModule({
  imports: [ 
    MatButtonModule, 
    MatToolbarModule, 
    MatInputModule, 
    MatProgressSpinnerModule, 
    MatCardModule, 
    MatIconModule,
    MatTableModule,
    MatPaginatorModule, 
    MatSortModule   ],
  exports: [ 
    MatButtonModule, 
    MatToolbarModule, 
    MatInputModule, 
    MatProgressSpinnerModule, 
    MatCardModule, 
    MatIconModule,
    MatTableModule,
    MatPaginatorModule, 
    MatSortModule   ]
})

export class MaterialModule { } 