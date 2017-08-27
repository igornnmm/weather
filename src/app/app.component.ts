import { Component } from '@angular/core';
import { HttpService } from './Services/http.service';


@Component({
  selector: 'my-app',
  template: `
    <form class="example-form">
        <md-input-container>
            <input mdInput placeholder="City:" name="city" [(ngModel)]="city">
        </md-input-container>
        <button md-mini-fab (click)="submit(city)"><md-icon>send</md-icon></button>
    </form>
    
    <div *ngIf="done">
        <location>load</location>
    </div>
  `
})

export class AppComponent {
  done: boolean = false;
  constructor(private httpService: HttpService){}
  submit(city: string){
    this.done = false;
    console.log(city);
    this.httpService
        .getFactorial(city)
        .then(() => {
          this.done = true;
          //console.log("data",this.httpService.getData())
        });


  }

}
