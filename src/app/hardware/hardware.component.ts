import { Component, OnInit, VERSION } from '@angular/core';
import { liveQuery } from 'dexie';
import { db, Friend,  PC, Audio, Handy, TV, Console, Printer, Monitor, Periphaerie } from 'src/db/db';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.sass']
})



export class HardwareComponent implements OnInit {

  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  id: number = 0;
  pc$ = liveQuery(() => db.pcs.where('id').equals(this.id).toArray());
  panelOpenState = false;


  friend: Friend = {
    id: 0,
    name: ''
  }

  pc: PC = {
    id: 0,
    friendId: 0,
    mainboard: '',
    cpu: '',
    ram: '',
    gpu: '',
    mTwo: '',
    ssd: '',
    hdd: '',
    psu: '',
    case: '',
    fans: '',
    rgb: '',
    exctensionCard: ''
  }

  audio: Audio = {
    id: 0,
    friendId: 0,
    micro: '',
    interface: '',
    amp: '',
    preamp: '',
    dac: '',
    dacamp: '',
    micArm: '',
    headphone: '',
    earBuds: '',
    iem: '',
    speaker: '',
    portableSpeaker: '',
}

handy: Handy = {
    id: 0,
    friendId: 0,
    model: '',
    brand: '',
    osVersion: '',
    year:  new Date().getFullYear()
}

tv: TV = {
    id: 0,
    friendId: 0,
    model: '',
    resolution: '',
    panel: '',
    brand: '',
    ports: '',
}

console: Console = {
    id: 0,
    friendId: 0,
    model: '',
    brand: '',
}

printer: Printer = {
    id: 0,
    friendId: 0,
    model: '',
    cartriges: '',
    brand: '',
}

monitor: Monitor = {
    id: 0,
    friendId: 0,
    brand: '',
    panel: '',
    size: 0,
    refreshrate: 0,
    curved: false
}

periphaerie: Periphaerie = {
    id: 0,
    friendId: 0,
    mouse: '',
    mousepad: '',
    glides: '',
    keyboard: '',
    headset: '',
    webcam: '',
}
  
  

  ngOnInit(): void {
    if(this.router.url != 'new-hardware'){
      this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    }
  }

  identifyList(index: number, list: PC) {
    return `${list.id}
    ${list.friendId}
    ${list.mainboard}
    ${list.cpu}
    ${list.ram}
    ${list.gpu}
    ${list.mTwo}
    ${list.ssd}
    ${list.hdd}
    ${list.psu}
    ${list.case}
    ${list.fans}
    ${list.rgb}
    ${list.exctensionCard}`;
  }

}
