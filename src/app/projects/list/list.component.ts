import { Component, OnInit } from "@angular/core";
import { projectItem } from "../types";
import { ProjectsService } from "../projects.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  projectList: projectItem[] = [
    {
      name: "zzw",
      description: "superman"
    },
    {
      name: "zzy",
      description: "awesome"
    }
  ];

  constructor(public projectsService: ProjectsService) { }

  ngOnInit(): void {
  }

}
