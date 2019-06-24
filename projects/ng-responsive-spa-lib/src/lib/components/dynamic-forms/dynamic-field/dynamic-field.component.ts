import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'rsl-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent implements OnInit {

  @Input() config;
  @Input() form: FormGroup;
  @Input() operation: string;
  @Input() submitted: string;
  constructor() { }

  ngOnInit() {}

  get control() {
    return this.form.controls[this.config.key];
  }

  getErrorMessage() {
    let msg = '';
    if (this.config.errorMsgs) {
      const keys = Object.keys(this.config.errorMsgs);
      if (keys.length) {
        const errorKey = keys.find(key => this.control.hasError(key));
        if (errorKey) {
          msg = this.config.errorMsgs[errorKey];
        }
      }
    }
    return msg;
  }

}
