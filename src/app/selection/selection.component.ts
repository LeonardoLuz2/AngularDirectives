import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  constructor(private modalService: NgbModal, ) { }

  @Output() onSelection = new EventEmitter();
  rows = [
    { name: 'Austin', gender: 'Male', age: '1' },
    { name: 'Dany', gender: 'Male', age: '2' },
    { name: 'Molly', gender: 'Female', age: '3' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.sendSelection(result);
    }, () => {
      this.sendSelection('');
    });
  }

  sendSelection(result) {
    this.onSelection.emit(result);
  }

}
