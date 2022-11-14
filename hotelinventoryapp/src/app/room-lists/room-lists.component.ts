import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRoomsItems} from "../rooms/roomsData";

@Component({
  selector: 'app-room-lists',
  templateUrl: './room-lists.component.html',
  styleUrls: ['./room-lists.component.scss']
})
export class RoomListsComponent implements OnInit {
  @Input() Table: IRoomsItems[] = []

  @Output() selectedRow = new EventEmitter<IRoomsItems>()

  constructor() { }

  ngOnInit(): void {}

  selectRow(room: IRoomsItems){
    this.selectedRow.emit(room)
  }

}
