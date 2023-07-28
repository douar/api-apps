import { Component } from '@angular/core';
import {IBoredActivity} from "../../../_interfaces/IBoredActivity";
import {BoredServiceService} from "../../../services/bored-api/bored-service.service";

@Component({
  selector: 'app-bored-main',
  templateUrl: './bored-main.component.html',
  styleUrls: ['./bored-main.component.css']
})
export class BoredMainComponent {

  randomActivity: IBoredActivity | null = null;

  constructor(private boredService: BoredServiceService) {}

  getRandomActivity() {
    console.log('button clicked', this.randomActivity)
    this.boredService.getRandomActivity()
  }
}
