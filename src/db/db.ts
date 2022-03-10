import Dexie, { Table } from 'dexie';

export interface Friend {
    id?: number;
    name: string;
    // pcId: string;
    // audioId: string;
    // handyId: string;
    // tvId: string;
    // consoleId: string;
    // printerId: string;
    // monitorId: string;
    // periphaerieId: string;

}

export interface PC {
    id?: number;
    friendId: number;
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
    friendId: number;
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
    friendId: number;
    model: string;
    brand: string;
    osVersion: string;
    year: Date;
}

export interface TV {
    id?: number;
    friendId: number;
    model: string;
    resolution: string;
    panel: string;
    brand: string;
    ports: string;
}

export interface Console {
    id?: number;
    friendId: number;
    model: string;
    brand: string;
}

export interface Printer {
    id?: number;
    friendId: number;
    model: string;
    cartriges: string;
    brand: string;
}

export interface Monitor {
    id?: number;
    friendId: number;
    brand: string;
    panel: string;
    size: number;
    refreshrate: number;
    curved: boolean;
}

export interface Periphaerie {
    id?: number;
    friendId: number;
    mouse: string;
    mousepad: string;
    glides: string;
    keyboard: string;
    headset: string;
    webcam: string;
}

export class AppDB extends Dexie {
    friends!: Table<Friend, number>;
    pcs!: Table<PC, number>;
    audios!: Table<Audio, number>;
    handys!: Table<Handy, number>;
    tvs!: Table<TV, number>;
    consoles!: Table<Console, number>;
    printers!: Table<Printer, number>;
    monitors!: Table<Monitor, number>;
    periphaeries!: Table<Periphaerie, number>;

    constructor() {
        super('ngdexieliveQuery');
        this.version(1).stores({
            friends: '++id',
            pcs: '++id',
            audios: '++id',
            handys: '++id',
            tvs: '++id',
            consoles: '++id',
            printers: '++id',
            monitors: '++id',
            periphaeries: '++id'
            
        });
        this.on('populate', () => this.populate());
    }

    async populate() {
        const friendId = await db.friends.add({
            name: 'Test Tilldo'
        });
        await db.pcs.bulkAdd([
            {
                friendId,
                mainboard: 'MSI B550',
                cpu: 'I9 10900k',
                ram: 'Balistix',
                gpu: '3080',
                mTwo: 'WD',
                ssd: 'samsung',
                hdd: 'big black',
                psu: 'dBöller',
                case: 'pure base 500',
                fans: 'Noctua',
                rgb: 'jaaaa',
                exctensionCard: 'capture card',
            },
        ]);
    }

}

export const db = new AppDB();