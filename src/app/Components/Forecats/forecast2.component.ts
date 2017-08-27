import { Component } from '@angular/core';
import { HttpService } from "../../Services/http.service";

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
    selector: 'wh-forecast2',
    templateUrl: './forecast2.component.html',
    styleUrls: ['./forecast2.component.css']
})
export class Forecast2Component {

    days = this.getLocation();

    constructor(private httpService: HttpService){ }

    getIcon(code:number) {
        return ICON[code] || ICON[34];
    }

    getLocation() {
        return this.httpService.getData('forecast');
    }

}
