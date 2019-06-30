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
