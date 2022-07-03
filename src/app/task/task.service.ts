import { ChangeDetectorRef, Injectable } from "@angular/core";
import { taskList } from "./types";

@Injectable({
  providedIn: "root"
})
export class TaskService {

  constructor() { }

  fetchTask(id: string): taskList {
    return [
      {
        id: 1,
        name: "task1",
        desc: "first task",
        status: 1,
        createTime: "2",
        updateTime: "3",
        tasks: [{
          name: "1",
          id: 1
        }]
      },
      {
        id: 2,
        name: "task2",
        desc: "second task",
        status: 1,
        createTime: "2",
        updateTime: "3"
      },
      {
        id: 3,
        name: "task3",
        desc: "third task",
        status: 1,
        createTime: "2",
        updateTime: "3"
      }
    ];
  }
}
