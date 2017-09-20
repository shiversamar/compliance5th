import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ComplianceService {

  constructor(private db: AngularFireDatabase ) { }

  create(compliance) {
    return this.db.list('/compliances').push(compliance);
  }

}
