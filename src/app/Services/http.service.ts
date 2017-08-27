import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
    private data: object;

    constructor(private http: Http) {
    }

    getFactorial(city: string): Promise<object> {
        let url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + city + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

        let data = this.http.get(url)
            .toPromise()
            .then(response => {
                this.data = {
                    location: response.json().query.results.channel.location,
                    forecast: response.json().query.results.channel.item.forecast
                };
                console.log(this.data)
            })
            .catch(this.handleError);

        return data;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getData(mode: string) {
        //console.log(this.data);
        return this.data[mode];
    }

}

