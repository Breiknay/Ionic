import {OnInit, ViewChild} from '@angular/core';
import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiService } from '../api.service';

import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Items: any;



  constructor(private apiService: ApiService) {

  }
ngOnInit() {
  this.apiService.getImage().subscribe((resp: any) => {
    this.Items = resp;
    console.log(resp);

  });
}

}
