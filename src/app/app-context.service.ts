import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppCtxService {
    private _baseUri: string;

    constructor() {
        this.onInit();
    }

    onInit(): void {
        this._baseUri = 'http://localhost:9020';
    }

    get baseUri(): string {
        return this._baseUri;
    }
}
