import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core";
import { SharedModule } from "./shared";
import { LoginModule } from "./login";
import { NZ_I18N } from "ng-zorro-antd/i18n";
import { zh_CN } from "ng-zorro-antd/i18n";
import { registerLocaleData } from "@angular/common";
import zh from "@angular/common/locales/zh";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProjectsModule } from "./projects";
import { TaskModule } from "./task";
import { AppService } from "./app.service";

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    LoginModule,
    ProjectsModule,
    TaskModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
