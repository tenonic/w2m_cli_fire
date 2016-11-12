import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.css']
})
export class AdsListComponent implements OnInit {

  private locations: Array<any> = [];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // this.httpService.getArray('locations.json')
    //   .subscribe(data => console.log(data));
  }

}
