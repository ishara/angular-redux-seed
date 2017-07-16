import { Component, OnInit } from '@angular/core';
import {DECREMENT, INCREMENT} from "./messages.store";
import {NgRedux, select} from "ng2-redux";
import {IAppState} from "../app.store";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent  {
  @select(s => s.messaging.newMessages) newMessages;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.ngRedux.dispatch({ type: DECREMENT });
  }
}
