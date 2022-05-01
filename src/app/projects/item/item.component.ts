import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { projectItem } from "../types";
import { ProjectsService } from "../projects.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  @Input() project: projectItem | undefined;

  constructor(private cd: ChangeDetectorRef, private projectService: ProjectsService) { }

  ngOnInit(): void {
    console.log(this.projectService, "projectService");
  }

}
