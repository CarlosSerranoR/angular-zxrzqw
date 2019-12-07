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
  templateUrl: "./for-item.html"
})
export class AppControlComponent {
  @Input() form: FormGroup;

  @Input()
  set path(path: string) {
    this.pathSegments = path.split(".");
  }
  pathSegments: string[] = [];

  constructor() {}

  isFormGroup(val) {
     
    //  console.log(val)
     
    return val instanceof FormGroup;
  }
  isFormControl(val) {
    
    // console.log(val.value)
    
    return val instanceof FormControl;
  }
  getKeys(val){
    // console.log(Object.keys(val))
    return Object.keys(val)
  }
}
