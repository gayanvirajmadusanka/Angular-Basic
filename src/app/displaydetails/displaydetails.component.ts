import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css'],
})
export class DisplaydetailsComponent implements OnInit {
  showSecret = false;
  log = [];

  constructor() {}

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

  ngOnInit(): void {}
}
