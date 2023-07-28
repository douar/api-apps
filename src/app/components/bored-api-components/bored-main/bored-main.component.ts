import {Component, OnDestroy} from '@angular/core';
import {IBoredActivity} from "../../../_interfaces/IBoredActivity";
import {BoredServiceService} from "../../../services/bored-api/bored-service.service";
import {first, Subscription} from "rxjs";

@Component({
  selector: 'app-bored-main',
  templateUrl: './bored-main.component.html',
  styleUrls: ['./bored-main.component.css']
})
export class BoredMainComponent implements OnDestroy{

  subRandomActivity!: Subscription;
  randomActivity: IBoredActivity | null = null;

  constructor(private boredService: BoredServiceService) {}

  getRandomActivity() {
    console.log('button clicked')
    this.boredService.getRandomActivity()
    this.subRandomActivity = this.boredService.$randomActivity.subscribe(activity => {
      this.randomActivity = activity
      console.log(this.randomActivity)
    })
  }

  ngOnDestroy() {
    this.subRandomActivity.unsubscribe()
  }
}
