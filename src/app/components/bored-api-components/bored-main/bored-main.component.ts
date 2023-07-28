import { Component } from '@angular/core';
import {IBoredActivity} from "../../../_interfaces/IBoredActivity";

@Component({
  selector: 'app-bored-main',
  templateUrl: './bored-main.component.html',
  styleUrls: ['./bored-main.component.css']
})
export class BoredMainComponent {

  randomActivity: IBoredActivity | null = null;

  getRandomActivity() {
    console.log('button clicked', this.randomActivity)
  }
}
