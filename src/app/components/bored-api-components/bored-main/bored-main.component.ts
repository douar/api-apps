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

  activityTypeList: string[] = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
  subActivityByType!: Subscription;
  activityByType: IBoredActivity = {
    activity: '',
    type: '',
    participants: 0,
    price: 0,
    link: '',
    key: '',
    accessibility: 0
  }
  selectedActivityType!: string;

  participantCount!: number;
  constructor(private boredService: BoredServiceService) {}

  getRandomActivityClick() {
    this.boredService.getRandomActivity()
    this.subRandomActivity = this.boredService.$randomActivity.subscribe(activity => {
      this.randomActivity = <IBoredActivity>activity
    })
  }

  getActivityByTypeClick() {
    if(this.selectedActivityType == null || undefined){
      return alert('Please select an activity type for this function')
    }
    this.boredService.getActivityByType(this.selectedActivityType)
    this.subActivityByType =this.boredService.$activityByType.subscribe(activity => {
      this.activityByType = <IBoredActivity>activity
    })
  }

  ngOnDestroy() {
    this.subRandomActivity.unsubscribe()
    this.subActivityByType.unsubscribe()
  }

  getActivityByParticipantCountClick() {
    console.log('activity by participant clicked')
    this.boredService.getActivityByParticipantCount(1)
  }
}
