import {BrowserModule} from "@angular/platform-browser";
import {isDevMode, NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {INITIAL_STATE, rootReducer} from "./app.store";
import {DevToolsExtension, NgRedux, NgReduxModule} from "ng2-redux";
import {TodosModule} from "./tasking/todos.module";
import {MessagingModule} from "./messages/messaging.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    TodosModule,
    MessagingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>,devTool: DevToolsExtension){
    let enhancers = isDevMode() ? devTool.enhancer():[];
    ngRedux.configureStore(rootReducer, INITIAL_STATE,[],enhancers);
  }
}
