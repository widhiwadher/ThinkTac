import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  baseUrl =
    'https://gist.githubusercontent.com/manzooralam/4b6aca6e1aa794c57c0cb6e7a2605109/raw/694828a0b1084ef63ff507ed85de3db6e3931e99/list.json';
  filterValue: any = '';
  dataList: any = '';
  constructor(private _http: HttpClient) { }

  callingService() {
    this._http.get(this.baseUrl).subscribe(res => {
      this.dataList = res
    });
    return this._http.get(this.baseUrl);
  }

  filterData(str: any) {
    this.filterValue = this.dataList.filter((item: any) => {
      return item.Name.includes(str);
    });
    return this.filterValue;
  }
}
