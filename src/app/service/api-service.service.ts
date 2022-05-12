import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  baseUrl =
    'https://gist.githubusercontent.com/manzooralam/4b6aca6e1aa794c57c0cb6e7a2605109/raw/694828a0b1084ef63ff507ed85de3db6e3931e99/list.json';

  private subject = new Subject<any>();
  constructor(private _http: HttpClient) {}

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  callingService() {
    const userData = this._http.get(this.baseUrl);
    return userData;
  }
}
