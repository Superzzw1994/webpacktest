import { NgModule } from "@angular/core";
import { SharedModule } from "../shared";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzModalModule } from "ng-zorro-antd/modal";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import { NzButtonModule } from "ng-zorro-antd/button";
import { ProjectsService } from "./projects.service";


@NgModule({
  declarations: [
    ListComponent,
    ItemComponent
  ],
  imports: [
    SharedModule,
    NzCardModule,
    NzModalModule,
    ProjectsRoutingModule,
    NzButtonModule
  ],
  providers: [ProjectsService]
})
export class ProjectsModule {
  visible = false;
}
