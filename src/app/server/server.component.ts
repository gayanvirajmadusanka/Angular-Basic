import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css'],
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent implements OnInit {
  serverId: number = 10;
  serverStatus: string = 'Offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  ngOnInit(): void {}

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
