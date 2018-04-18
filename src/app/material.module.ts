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
  MatSortModule,
  MatExpansionModule  
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
    MatSortModule,
    MatExpansionModule   ],
  exports: [ 
    MatButtonModule, 
    MatToolbarModule, 
    MatInputModule, 
    MatProgressSpinnerModule, 
    MatCardModule, 
    MatIconModule,
    MatTableModule,
    MatPaginatorModule, 
    MatSortModule,
    MatExpansionModule   ]
})

export class MaterialModule { } 