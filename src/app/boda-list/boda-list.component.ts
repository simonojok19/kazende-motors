import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-boda-list',
  templateUrl: './boda-list.component.html',
  styleUrls: ['./boda-list.component.scss']
})
export class BodaListComponent implements OnInit {

  constructor(db: AngularFirestore) {}

  ngOnInit(): void {
  }

}
