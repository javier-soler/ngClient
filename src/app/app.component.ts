import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppCtxService } from './context/app-context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'VoyVasClient';
  constructor(http: HttpClient, private ctx: AppCtxService) { }

  ngOnInit(): void {
    this.ctx.getPrincipal().subscribe(x=> console.log(x));
  }
}
