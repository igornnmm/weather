import { Component } from '@angular/core';
import { HttpService } from './Services/http.service';

@Component({
  selector: 'wh-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  done: boolean = false;

  constructor(private httpService: HttpService){}

  submit(city: string){
    this.done = false;
    console.log(city);
    this.httpService
        .getWeather(city)
        .then(() => {
          this.done = true;
          //console.log("data",this.httpService.getData())
        });
  }
}
