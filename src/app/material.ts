import {MatButtonModule, MatCardModule, MatExpansionModule, MatSelectModule, MatInputModule, MatIconModule, MatMenuModule, MatSnackBarModule, MatDialogModule} from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatSelectModule, MatIconModule, MatMenuModule, MatSnackBarModule, MatDialogModule],
  exports: [MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatSelectModule, MatIconModule, MatMenuModule, MatSnackBarModule, MatDialogModule]
})

export class MaterialModule {}
