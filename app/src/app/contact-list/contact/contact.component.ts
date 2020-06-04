import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import {ContactDataService} from './../../ContactData.service';
import{Contact} from './../../contact.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent  { 
  
  @Input() contact;
  @Input() index;
  showEditBool: boolean = false;

  contactServObj: ContactDataService;

  constructor(contactServObj: ContactDataService, private router: Router, private route: ActivatedRoute) {
    this.contactServObj = contactServObj;
  }

  showEditForm(event) {
    this.showEditBool = !this.showEditBool;
    //this.router.navigate(['/contactList/edit', ])
  }
  deletContact(index){
    this.contactServObj.deleteContactHandler(index);
  }
}
