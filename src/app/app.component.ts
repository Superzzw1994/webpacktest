import { Component } from "@angular/core";
import { NzDrawerPlacement } from "ng-zorro-antd/drawer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  drawerVisible: boolean = false;
  placement: NzDrawerPlacement = "left";

  changeDrawerVisible() {
    this.drawerVisible = !this.drawerVisible;
  }
}
