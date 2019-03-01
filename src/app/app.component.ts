import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  title = 'VoyVasClient';
  constructor(http: HttpClient) { }

  ngOnInit(): void {
    console.log('AppComponent.init');
  }
}
