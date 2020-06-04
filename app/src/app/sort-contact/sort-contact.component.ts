import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ContactDataService} from './../ContactData.service';

@Component({
  selector: 'app-sort-contact',
  templateUrl: './sort-contact.component.html',
  styleUrls: ['./sort-contact.component.css']
})
export class SortContactComponent implements OnInit {
  @Output() contactListUpdate:EventEmitter<any>=new EventEmitter<any>();

  constructor(private contactServObj: ContactDataService) { }

  ngOnInit() {
  }

  onSelectChange(event) {
    console.log(event.target.value);
    // const field = event.target.value === 'default' ? null : event.target.value;
    this.contactServObj.sortContactHandler(event.target.value);
    this.contactListUpdate.emit();
  }

}
