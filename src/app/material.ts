import {MatButtonModule, MatCardModule, MatExpansionModule, MatSelectModule, MatInputModule, MatIconModule, MatMenuModule} from "@angular/material";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatSelectModule, MatIconModule, MatMenuModule],
  exports: [MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatSelectModule, MatIconModule, MatMenuModule]
})

export class MaterialModule {}
