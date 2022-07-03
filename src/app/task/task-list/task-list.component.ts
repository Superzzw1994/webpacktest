import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { taskList } from "../types";
import { TaskService } from "../task.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  taskList!: taskList;

  constructor(public router: Router, public activeRouter: ActivatedRoute, public taskService: TaskService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(params => {
      const taskId = params.get("taskId");
      this.taskList = this.taskService.fetchTask(taskId || "");
    });
    this.cd.markForCheck();
  }

}
