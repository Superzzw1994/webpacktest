import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SiderComponent } from "./sider/sider.component";
import { NzDrawerModule } from "ng-zorro-antd/drawer";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzListModule } from "ng-zorro-antd/list";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SiderComponent
  ],
  imports: [
    CommonModule,
    NzDrawerModule,
    NzIconModule,
    NzListModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SiderComponent,
    NzDrawerModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error("CoreModule is already loaded. Import it in the AppModule only");
    }
  }
}
