import { Component } from "@angular/core";
import { TitleMenu } from "./interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng-starter";
  menus: TitleMenu[] = [{
    link: "home",
    title: "热门"
  }, {
    link: "men",
    title: "男装"
  }, {
    link: "phone",
    title: "手机"
  }];
  activeTab: TitleMenu = this.menus[0];

  getSelectedMenu = (menu: TitleMenu) => {
    this.activeTab = menu;
  };
}
