import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import {HttpService} from "../Services/http.service";

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
start tbl
        <div class="example-container mat-elevation-z8">
            <md-table #table [dataSource]="dataSource">

                <ng-container cdkColumnDef="date">
                    <md-header-cell *cdkHeaderCellDef> Date </md-header-cell>
                    <md-cell *cdkCellDef="let row"> {{row.date}} </md-cell>
                </ng-container>

                <ng-container cdkColumnDef="code">
                    <md-header-cell *cdkHeaderCellDef>  </md-header-cell>
                    <md-cell *cdkCellDef="let row"> <img src="{{getIcon(row.code)}}" width="32">  </md-cell>
                </ng-container>

                <ng-container cdkColumnDef="high">
                    <md-header-cell *cdkHeaderCellDef> High Temp </md-header-cell>
                    <md-cell *cdkCellDef="let row"> {{row.high}} </md-cell>
                </ng-container>

                <ng-container cdkColumnDef="low">
                    <md-header-cell *cdkHeaderCellDef> Low Temp </md-header-cell>
                    <md-cell *cdkCellDef="let row"> {{row.low}} </md-cell>
                </ng-container>

                <md-header-row *cdkHeaderRowDef="displayedColumns"></md-header-row>
                <md-row *cdkRowDef="let row; columns: displayedColumns;"></md-row>
            </md-table>
        </div>
end tbl        
        `

})
export class ForecastComponent {

    constructor(private httpService: HttpService){console.log(this.httpService.getData('forecast')) }

    getIcon(code:number) {
        return ICON[code] || ICON[34];
    }


    displayedColumns = ['date', 'code', 'high', 'low'];
    exampleDatabase = new ExampleDatabase(
        this.httpService.getData('forecast')

     );
    dataSource: ExampleDataSource | null;

    ngOnInit() {

        this.dataSource = new ExampleDataSource(this.exampleDatabase);
    }

}

export interface Forecast {
    date: string;
    code: number;
    high: string;
    low: string;
}

export class ExampleDatabase {


    /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<Forecast[]> = new BehaviorSubject<Forecast[]>([]);

    constructor(d) {
        //console.log(d);
        this.dataChange.next(d);
    }
}

export class ExampleDataSource extends DataSource<any> {
    constructor(private _exampleDatabase: ExampleDatabase) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Forecast[]> {
        return this._exampleDatabase.dataChange;
    }

    disconnect() {}
}