import { Component } from '@angular/core';
import { HttpService } from "../Services/http.service";

const ICON = {
    '34': 'https://www.yahoo.com/sy/os/weather/1.0.1/shadow_icon/60x60/fair_day@2x.png',
    '32': 'https://www.yahoo.com/sy/os/weather/1.0.1/shadow_icon/60x60/clear_day@2x.png',
    '12': 'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/rain_day_night@2x.png',
    '30': 'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/partly_cloudy_day@2x.png',
    '28': 'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/mostly_cloudy_day_night@2x.png',
    '39': 'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/scattered_showers_day_night@2x.png',
    '26': 'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/cloudy_day_night@2x.png',
    '23': 'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/windy_day_night@2x.png',
    '47': 'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/partly_cloudy_day@2x.png',
    '4':  'https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/thundershowers_day_night@2x.png'
};

@Component({
    selector: 'forecast',
    template: `
        <div class="example-container mat-elevation-z8">
            <table class="my-table">
                <tr>
                    <th>date</th>
                    <th>code</th>
                    <th>high</th>
                    <th>low</th>
                </tr>
                <tr *ngFor="let day of days">
                    <td>{{day.date}}</td>
                    <td><img src="{{getIcon(day.code)}}" width="32"></td>
                    <td>{{day.high}}</td>
                    <td>{{day.low}}</td>
                </tr>
            </table>
        </div>
    `
})
export class Forecast2Component {

    constructor(private httpService: HttpService){ }

    getIcon(code:number) {
        return ICON[code] || ICON[34];
    }

    days = this.getLocation();

    getLocation() {
        return this.httpService.getData('forecast');
    }

}
