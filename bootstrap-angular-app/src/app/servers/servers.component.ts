import {Component, OnInit} from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles: [`
    .fifthLog {
      color: white;
    }
  `]
})
export class ServersComponent implements  OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  logs = [];
  clicked = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  updateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  ifUserNameEmpty() {
    console.log(this.userName === '')
    return this.userName === '';
  }

  onReset() {
    this.userName = '';
  }

  logClicks() {
    this.logs.push(new Date().toTimeString());
    // this.logs.push(this.logs.length + 1);
    this.clicked = this.logs.length % 2 ? true : false;
  }

  getColor() {
    return this.logs.length >= 5 ? 'blue' : 'white'
  }
}
