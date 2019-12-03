import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
  

import { DocumentService } from 'src/app/service/document.service';
import { MyDocument } from 'src/app/model/document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  docForm : FormGroup;
  realDocument:MyDocument;
  document:MyDocument;
  
  constructor(private docService:DocumentService, private route:ActivatedRoute, private location:Location) { 
    this.docForm = new FormGroup({
      "id": new FormControl(""),
      "name": new FormControl(""),
      "timedate": new FormControl(""),
      "description": new FormControl("")
    });
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params)=> this.getDocument(params)
    );
  }

  getDocument(params){
    this.docService.getDocument(params.id as number).subscribe(
      (doc) => {this.realDocument = doc; this.document = Object.assign(new MyDocument, doc); this.docForm.setValue(this.document)}
    );
  }

  back(){
    this.location.back();
  }

  save(){
    this.document = Object.assign(this.document, this.docForm.value);
    Object.assign(this.realDocument, this.document);
  }

}
