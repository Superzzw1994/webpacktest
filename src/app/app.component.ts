import { Component, ViewContainerRef, ViewChild, ElementRef } from "@angular/core";
import { NzDrawerPlacement } from "ng-zorro-antd/drawer";
import { AppService } from "./app.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  drawerVisible: boolean = false;
  placement: NzDrawerPlacement = "left";
  @ViewChild("addBtn", { static: false }) addBtn: ElementRef | undefined;

  constructor(public appService: AppService, private viewContainerRef: ViewContainerRef) {

  }

  changeDrawerVisible() {
    this.drawerVisible = !this.drawerVisible;
  }

  createModal() {
    console.log(this.addBtn)
    this.appService.createModal("", this.viewContainerRef);
  }
}
