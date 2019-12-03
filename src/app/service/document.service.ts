import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { MyDocument } from '../model/document';

let Docs:MyDocument[] = [
  {id:1, name:"doc1", timedate: new Date(Date.now()), description:""},
  {id:2, name:"doc2", timedate: new Date(Date.now()), description:""}
];

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor() { }

  getList()
  {
    return of(Docs);
  }

}
