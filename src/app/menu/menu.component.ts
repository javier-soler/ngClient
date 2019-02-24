import { Component, OnInit } from '@angular/core';
import { MenuService } from './service/menu.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

    menu;
    constructor(private srv: MenuService) { }

    ngOnInit() {
        this.srv.getMenu().subscribe(m => this.menu = m);
    }

}
