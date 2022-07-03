import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzIconModule } from "ng-zorro-antd/icon";
import { DirectiveModule } from "../directive";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzIconModule,
    DirectiveModule
  ],
  exports: [CommonModule, NzIconModule, DirectiveModule]
})
export class SharedModule {}
