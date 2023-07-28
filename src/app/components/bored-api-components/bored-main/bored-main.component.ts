import {Component, OnDestroy} from '@angular/core';
import {IBoredActivity} from "../../../_interfaces/IBoredActivity";
import {BoredServiceService} from "../../../services/bored-api/bored-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-bored-main',
  templateUrl: './bored-main.component.html',
  styleUrls: ['./bored-main.component.css']
})
export class BoredMainComponent implements OnDestroy{

  subRandomActivity!: Subscription;
  randomActivity: IBoredActivity = {
    activity: '',
    type: '',
    participants: 0,
    price: 0,
    link: '',
    key: '',
    accessibility: 0
  }
  activityType: string[] = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

  constructor(private boredService: BoredServiceService) {}

  getRandomActivityClick() {
    this.boredService.getRandomActivity()
    this.subRandomActivity = this.boredService.$randomActivity.subscribe(activity => {
      this.randomActivity = <IBoredActivity>activity
    })
  }

  getActivityByTypeClick() {
    console.log('activity by type clicked')
    this.boredService.getActivityByType(this.activityType[1])
  }

  ngOnDestroy() {
    this.subRandomActivity.unsubscribe()
  }
}
