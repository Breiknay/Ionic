import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
// eslint-disable-next-line @typescript-eslint/naming-convention
export class ApiService {Key = 'JY87JF9m7AXQTRWrnXs6RygRuTFpxYcKJbJA0z17E3Q';

  count = 30;
  getImage() {
    return this.httpClient.get(
      `https://api.unsplash.com/photos/random/?count=${this.count}&client_id=${this.Key}`
    );
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private httpClient: HttpClient) {}
}
