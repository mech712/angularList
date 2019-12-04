import { Injectable } from '@angular/core';
import { of, from, Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';

import { MyDocument } from '../model/document';

function generateDocs():MyDocument[]{
  let arr:MyDocument[] = [];
  for(let i of Array(10).keys()){
    let date: Date = new Date();
    arr.push({id:i, name:`document_${i}`, timedate:date, description:""});
  }
  return arr;
}

let Docs:MyDocument[] = generateDocs();

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
