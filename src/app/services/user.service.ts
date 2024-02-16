import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: any;
  public firestore: Firestore = inject(Firestore);
  constructor(private afs: AngularFirestore) {
  }

  async getData(){
    return this.afs.collection('usuarios').doc('kS8wAUiGymg2OOxMHU51').valueChanges();
  }
}
