import { Component, OnInit, VERSION } from '@angular/core';
import { liveQuery } from 'dexie';
import { db, Friend } from 'src/db/db';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { elementAt } from 'rxjs';
import { IFriend } from '../interfaces/IFriend';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.sass']
})



export class HardwareComponent implements OnInit {

  friends$ = liveQuery(() => db.friends.toArray());
  // friends$.forEach(element => {
  //   console.log(element)
  // });

  friendName: string = 'Till Brede';

  

  friend: IFriend = {
    id: 0,
    name: ''
  }

  constructor(private formbuilder: FormBuilder) { }

  friendForm = this.formbuilder.group({
    name: ["", Validators.compose([Validators.required, Validators.minLength(1)])],
  });

  ngOnInit(): void {
  }

  async save() {
    this.friend = this.friendForm.value;
    console.log(this.friendName);
    await db.friends.add({
      name: this.friend.name,
    })
  }

  identifyList(index: number, list: Friend) {
    return `${list.id}${list.name}`;
  }
}
