import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import{ContactDataService} from './../../../ContactData.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Contact } from './../../../contact.model';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent implements OnInit {
editForm: FormGroup;
  contact: Contact;
  index: number;
  name = '';
  phone = '';
  email = '';
  organization = '';
  notes = '';
  oldContact: Contact;

  contactServObj: ContactDataService;

 

  constructor(contactServObj: ContactDataService, private route: ActivatedRoute, private router: Router) {
    this.contactServObj = contactServObj;
  }
  ngOnInit() {
  
    console.log(this.route.snapshot.params);
    this.index = +this.route.snapshot.params['index'];
    console.log(this.index);
    this.contact = this.contactServObj.getContact(this.index);
  }
  onCancel(event) {
    this.router.navigate(['/contactList']);
  }
  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      console.log(submittedForm.invalid);
      return;
    }
    console.log(submittedForm);
    const contactToSave: Contact = {name: submittedForm.value.name, phone: submittedForm.value.phone,
      email: submittedForm.value.email, organization: submittedForm.value.organization, notes: submittedForm.value.notes};
    console.log(contactToSave);
    this.index = this.contactServObj.findContactIndex(this.contact);
    // console.log(this.index);
    this.contactServObj.editContactHandler(contactToSave, this.index);
    this.router.navigate(['/contactList']);
  }

}
