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
  MatExpansionModule,
  MatGridListModule,
  MatDialogModule,
  MatTabsModule  
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
    MatExpansionModule,
    MatGridListModule,
    MatDialogModule,
    MatTabsModule   ],
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
    MatExpansionModule,
    MatGridListModule,
    MatDialogModule,
    MatTabsModule   ]
})

export class MaterialModule { } 