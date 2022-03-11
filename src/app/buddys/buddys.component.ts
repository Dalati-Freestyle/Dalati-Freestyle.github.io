import { Component, OnInit, VERSION } from '@angular/core';
import { liveQuery } from 'dexie';
import { db, Friend } from 'src/db/db';
import { FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-buddys',
  templateUrl: './buddys.component.html',
  styleUrls: ['./buddys.component.sass']
})
export class BuddysComponent implements OnInit {
  friends$ = liveQuery(() => db.friends.toArray());
  // friends$.forEach(element => {
  //   console.log(element)
  // });

  friendName: string = 'Till Brede';

  

  friend: Friend = {
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
