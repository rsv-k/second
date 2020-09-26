import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
   exports: [
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatDividerModule,
      MatInputModule,
      MatTableModule,
      MatBadgeModule,
      MatAutocompleteModule,
      MatSlideToggleModule,
   ],
})
export class MaterialModule {}
