import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'rsl-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  status: string;
  submitted = false;
  @Input() viewModel: any;
  @Input() formFields: any[];
  @Input() operation;
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() create: EventEmitter<any> = new EventEmitter();

  form: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.formFields.forEach(field => {
      const validations = this.operation !== 'view' && field.validations;
      const control = new FormControl(this.viewModel[field.key], validations);
      this.form.addControl(field.key, control);
    });
  }

  onEdit = () => this.router.navigate(['../edit'], {relativeTo: this.route});

  onCancel = () => this.location.back();


  onSave() {
    this.submitted = true;
    if (this.form.valid) {
      this.status = 'waiting';
      this.update.emit(this.form.value);
    }
  }

  onCreate() {
    this.submitted = true;
    if (this.form.valid) {
      this.status = 'waiting';
      this.create.emit(this.form.value);
    }
  }

}
