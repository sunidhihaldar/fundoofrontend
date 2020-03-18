import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { 
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatTooltipModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSnackBarModule,
  MatDividerModule,
  MatDialogModule,
  MatListModule,
  MatChipsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

const materialComponents = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatTooltipModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  FlexLayoutModule,
  MatSnackBarModule,
  MatDividerModule,
  MatDialogModule,
  MatListModule,
  MatChipsModule
];

@NgModule({
  declarations: [],
  imports: [
    materialComponents
  ],
  exports: [
    materialComponents
  ]
})
export class MaterialModule { }
