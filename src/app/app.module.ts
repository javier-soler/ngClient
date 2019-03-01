import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './account/account.module';
import { MenuComponent } from './menu/menu.component';
import { AppCtxService } from './app-context.service';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        AccountModule
    ],
    providers: [AppCtxService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
