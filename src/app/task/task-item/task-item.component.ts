import { Component, OnInit, Input } from "@angular/core";
import { TaskService } from "../task.service";
import { task } from "../types/index";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.scss"]
})
export class TaskItemComponent implements OnInit {
  @Input('tasks') list: task[] = [];

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

}
