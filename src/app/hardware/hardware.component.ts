import { Component, OnInit, VERSION } from '@angular/core';
import { liveQuery } from 'dexie';
import { db, Friend } from 'src/db/db';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.sass']
})
export class HardwareComponent implements OnInit {

  friends$ = liveQuery(() => db.friends.toArray());
  friendName = 'Till Brede';
  constructor() { }

  ngOnInit(): void {
  }
  identifyList(index: number, list: Friend) {
    return `${list.id}${list.name}`;
  }
}
