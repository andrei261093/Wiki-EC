import {MatButtonModule, MatCardModule, MatExpansionModule, MatSelectModule, MatInputModule, MatIconModule, MatMenuModule, MatSnackBarModule,
  MatDialogModule, MatProgressBarModule, MatProgressSpinnerModule, MatPaginatorModule, MatToolbarModule, MatSidenavModule} from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatSelectModule, MatIconModule, MatMenuModule, MatSnackBarModule,
    MatDialogModule, MatProgressBarModule, MatProgressSpinnerModule, MatPaginatorModule, MatToolbarModule, MatSidenavModule],
  exports: [MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatSelectModule, MatIconModule, MatMenuModule, MatSnackBarModule,
    MatDialogModule, MatProgressBarModule, MatProgressSpinnerModule, MatPaginatorModule, MatToolbarModule,MatSidenavModule]
})

export class MaterialModule {}
