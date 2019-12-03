import { Injectable } from '@angular/core';
import { of, from, Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';

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

  getList():Observable<MyDocument[]>
  {
    return of(Docs);
  }

  getDocument(id:number):Observable<MyDocument>{
    return from(Docs).pipe(
      filter( (x) => x.id==id),
      first()
    );
  }

}
