import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components";
import { SilderComponent } from './components/silder/silder.component';
import { GridDirective } from './directives/grid.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SilderComponent,
    GridDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
