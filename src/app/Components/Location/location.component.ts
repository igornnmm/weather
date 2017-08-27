import { Component } from '@angular/core';
import {HttpService} from "../../Services/http.service";

@Component({
    selector: 'wh-location',
    templateUrl: './location.component.html'
})
export class LocationComponent {
    loc = this.getLocation();

    constructor(private httpService: HttpService){ }

    getLocation() {
        return this.httpService.getData('location');
    }
}