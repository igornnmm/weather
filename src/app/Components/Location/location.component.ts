import { Component } from '@angular/core';
import {HttpService} from "../../Services/http.service";

@Component({
    selector: 'location',
    templateUrl: './location.component.html'
})
export class LocationComponent {
    constructor(private httpService: HttpService){ }

    loc = this.getLocation();
    getLocation() {
        return this.httpService.getData('location');
    }
}