import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {
  
  @Input('buttonName') buttonName:string;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submit(){
    this.formSubmit.emit();
  }
}
