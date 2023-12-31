import { NgModule } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";

const MaterialComponents:any[] = [
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatSliderModule,
  MatButtonModule
]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
