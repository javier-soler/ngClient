import { Component, OnInit } from '@angular/core';
import { MenuService } from './service/menu.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

    menu: [];
    constructor(private srv: MenuService, private http: HttpClient) { }

    ngOnInit() {
        this.srv.getMenu().subscribe(m => this.menu = m);
    }

    logOut(): void {
       this.http.post('/logout',{}).subscribe();
    }

}
