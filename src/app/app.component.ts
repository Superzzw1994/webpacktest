import { Component, ViewContainerRef, ViewChild, ElementRef, OnInit } from "@angular/core";
import { NzDrawerPlacement } from "ng-zorro-antd/drawer";
import { AppService } from "./app.service";
import { ActivatedRoute } from "@angular/router";
import "reflect-metadata";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  drawerVisible: boolean = false;
  placement: NzDrawerPlacement = "left";
  @ViewChild("addBtn", { static: false }) addBtn: ElementRef | undefined;

  constructor(public appService: AppService, private viewContainerRef: ViewContainerRef, private activeRouter: ActivatedRoute) {

  }

  changeDrawerVisible() {
    this.drawerVisible = !this.drawerVisible;
  }

  createModal() {

    this.appService.createModal(undefined, this.viewContainerRef);

  }

  ngOnInit(): void {
    const obj = {
      name: "zzw",
      age: "18"
    };
    Reflect.defineMetadata("obj", "元数据", obj);
    // console.log(Reflect.getMetadata("obj", obj));
  }
}
