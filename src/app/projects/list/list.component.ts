import { Component, OnInit } from "@angular/core";
import { projectItem } from "../types";
import { ProjectsService } from "../projects.service";
import { Router } from "@angular/router";

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

  constructor(public projectsService: ProjectsService, public router: Router) { }

  ngOnInit(): void {
  }

  navigateToProject(project: projectItem) {
    this.router.navigate(["/tasks", project.name]);
  }
}
