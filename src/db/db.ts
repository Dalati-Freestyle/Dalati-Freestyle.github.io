import Dexie, { Table } from 'dexie';

export interface Friend {
    id?: number;
    name: string;
}

export interface PC {
    id?: number;
    mainboard: string;
    cpu: string;
    ram: string;
    gpu: string;
    mTwo: string;
    ssd: string;
    hdd: string;
    psu: string;
    case: string;
    fans: string;
    rgb: string;
    exctensionCard: string;
}

export interface Audio {
    id?: number;
    micro: string;
    interface: string;
    amp: string;
    preamp: string;
    dac: string;
    dacamp: string;
    micArm: string;
    headphone: string;
    earBuds: string;
    iem: string;
    speaker: string;
    portableSpeaker: string;
}

export interface Handy {
    id?: number;
    model: string;
    brand: string;
    osVersion: string;
    year: Date;
}

export interface TV {
    id?: number;
    model: string;
    resolution: string;
    panel: string;
    brand: string;
    ports: string;
}

export interface Console {
    id?: number;
    model: string;
    brand: string;
}

export interface Printer {
    id?: number;
    model: string;
    cartriges: string;
    brand: string;
}

export interface Monitor {
    id?: number;
    brand: string;
    panel: string;
    size: number;
    refreshrate: number;
    curved: boolean;
}

export interface Periphaerie {
    id?: number;
    mouse: string;
    mousepad: string;
    glides: string;
    keyboard: string;
    headset: string;
    webcam: string;
}

export class AppDB extends Dexie {



}

//export const db = new AppDB();