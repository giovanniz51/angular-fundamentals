import { Component, OnInit, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent implements OnInit {
  @Input() items: Passenger[]

  constructor() { }

  checkedInCount(): number{
    if(!this.items) return;

    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length
  }

  ngOnInit(): void { }
}
