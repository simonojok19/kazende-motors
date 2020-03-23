import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-boda-list',
  templateUrl: './boda-list.component.html',
  styleUrls: ['./boda-list.component.scss']
})
export class BodaListComponent implements OnInit {
  bodas$: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.bodas$ = db.collection('riders').valueChanges();
  }

  ngOnInit(): void {
  }

}
