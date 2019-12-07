import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxRecursiveFormModule } from "ngx-recursive-form";
import { AppComponent } from "./app.component";
import { FormItemComponent } from "./form-item.component";
import { TreeNode } from "./tree-node.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxRecursiveFormModule
  ],
  declarations: [AppComponent, FormItemComponent, TreeNode],
  bootstrap: [AppComponent]
})
export class AppModule {}
