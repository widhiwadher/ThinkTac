import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiServiceService) { }
  filterStr: any = '';
  userArr: any = '';

  ngOnInit(): void {
    this.apiService.callingService().subscribe((res) => {
      this.userArr = res;
      console.log(this.userArr);
    });
  }
  fnFilterData(event: any) {
    this.userArr = this.apiService.filterData(event)
  }
  // fnSearch(event: any) {
  //   console.log(this.searchStr)
  //   this.filterName = event.target.value;
  //   this.userArr = this.userArr.filter((item: any) => {
  //     return item.Name.includes(this.searchStr);
  //   });
  //   console.log(this.userArr);
  // }
}
