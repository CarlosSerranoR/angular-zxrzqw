import { Component, Input, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,FormControl
} from "@angular/forms";

@Component({
  selector: "form-item",
  templateUrl: "./form-item.html"
})
export class FormItemComponent {
  @Input() form: FormGroup;

  @Input()
  set path(path: string) {
    this.pathSegments = path.split(".");
  }
  pathSegments: string[] = [];

  constructor() {}

  isFormGroup(val) {
    return val instanceof FormGroup;
  }
  isFormControl(val) {
    return val instanceof FormControl;
  }
  getKeys(val){
    return Object.keys(val)
  }
}
