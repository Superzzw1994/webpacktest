import { Component, OnInit } from "@angular/core";
import { menu } from "../types/interfaces";

@Component({
  selector: "app-sider",
  templateUrl: "./sider.component.html",
  styleUrls: ["./sider.component.scss"]
})
export class SiderComponent implements OnInit {
  menus: menu[] = [
    {
      type: "month",
      name: "月视图",
      description: "按月查看您的任务",
      url: "/month",
      icon: "weibo-circle"
    },
    {
      type: "week",
      name: "周视图",
      description: "按周查看您的任务",
      url: "/week",
      icon: "ie"
    },
    {
      type: "day",
      name: "日视图",
      description: "按日查看您的任务",
      url: "/day",
      icon: "taobao-circle"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeRoute(type: string) {
    console.log(type);
  }
}
