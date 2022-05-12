import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  message: string = '';
  subscription!: Subscription;

  dataList: any = '';
  filterName: any = '';
  searchStr: any = '';
  userArr: any = '';
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.callingService().subscribe((res) => {
      this.userArr = res;
      console.log(this.userArr);
    });
  }

  fnSearch(event: any) {
    console.log(this.searchStr)
    this.filterName = event.target.value;
    this.userArr = this.userArr.filter((item: any) => {
      return item.Name.includes(this.searchStr);
    });
    console.log(this.userArr);
  }
}
