import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzIconModule } from "ng-zorro-antd/icon";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzIconModule
  ],
  exports: [CommonModule, NzIconModule]
})
export class SharedModule {}
