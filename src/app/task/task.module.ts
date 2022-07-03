import { NgModule } from "@angular/core";
import { SharedModule } from "../shared";
import { TaskRoutingModule } from "./task-routing.module";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskItemComponent } from "./task-item/task-item.component";


@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent
  ],
  imports: [
    SharedModule,
    TaskRoutingModule
  ]
})
export class TaskModule {}
