import { Component, OnInit, Input } from '@angular/core';

import {Passenger} from "../../models/Passenger.interface"
@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit {
  @Input() detail: Passenger
  editing: boolean = false

  constructor() { }

  ngOnInit(): void { }

  onNameChange(name: string){
    console.log(name)
  }
}
