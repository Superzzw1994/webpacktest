import { NgModule } from "@angular/core";
import { SharedModule } from "../shared";
import { LoginRoutingModule } from "./login-routing.module";
import { CardComponent } from "./card/card.component";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    FormsModule
  ]
})
export class LoginModule {}
