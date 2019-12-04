import { Component, OnInit } from '@angular/core';

import { DocumentService } from '../../service/document.service';
import { MyDocument } from '../../model/document';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  docList:MyDocument[] = [];

  constructor(private docService:DocumentService) { }

  ngOnInit() {
    this.docService.getList().subscribe(
      (docs:MyDocument[]) => this.docList = docs
    );
  }

}
