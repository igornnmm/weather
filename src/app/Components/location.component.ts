import { Component } from '@angular/core';
import {HttpService} from "../Services/http.service";

@Component({
    selector: 'location',
    template: `
        <div *ngIf="loc">
            <span style="font-size: 32px">{{loc.city}}</span>
            <br>
            <span style="font-size: 16px">{{loc.country}}, {{loc.region}}</span>
        </div>
        <forecast>x</forecast>
        `
})
export class LocationComponent {
    constructor(private httpService: HttpService){ }

    loc = this.getLocation();
    getLocation() {
        return this.httpService.getData('location');
    }
}