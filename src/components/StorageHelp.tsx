import {Drivers, Storage} from '@ionic/storage';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import {Encrypt, Decrypt} from './cryptHelp';

export class Machin {
  protected test: Storage;
  protected getting: string;
  constructor() {
    this.test = new Storage({
      name: '__testMDP',
      driverOrder: [CordovaSQLiteDriver._driver , Drivers.IndexedDB, Drivers.LocalStorage]
    })
    this.test.create();
    this.getting = ""
  }
  displayAll(){
    this.test.forEach((key, value, index) => {
      console.log("Key:", key, "Value:", value, "Index:", index)
    });
  }
  listeAll() {
    var toto : any = [];
    this.test.forEach((key, value, index) => {
      toto.push(`Key: ${key}, Value: ${value} Index: ${index}`)
    })
    return toto;
  }
  SetIn(key: string, value: string) {
    this.test.set(key, value)
    return;
  }
  GetIn(key: string) {
    this.test.get(key).then((e : any) => {
      this.getting = e;
      return;
    });
    const theGetting = this.getting;
    this.getting = "";
    return theGetting
  }
}
