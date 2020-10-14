import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
   exports: [
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatDividerModule,
      MatInputModule,
      MatTableModule,
      MatAutocompleteModule,
      MatSlideToggleModule,
      MatCheckboxModule,
      MatSidenavModule,
      MatMenuModule,
      MatDialogModule,
      MatSelectModule,
   ],
})
export class MaterialModule {}
