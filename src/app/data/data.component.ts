import { Component, OnInit } from '@angular/core';
import {FileEvent} from '../../model/fileEvent';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  files: Array<FileEvent> = [];
  private ws  = new WebSocket('ws://localhost:8080/ws/files');

  constructor() {
    this.ws.onmessage = (me: MessageEvent) => {
      const data = JSON.parse(me.data) as FileEvent;
      this.files.push(data);
    };
  }

  ngOnInit() {
  }

}
