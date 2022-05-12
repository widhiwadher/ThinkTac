import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() dataTest: any = '';
  constructor(private apiService: ApiServiceService) {}
  filterStr: any = '';
  message: string = '';
  subscription!: Subscription;

  //  this.subscription = this.data.currentMessage.subscribe(message => this.message = message)

  // searchText = '';
  // listArr: any = ['bus', 'car', 'bike', 'bmw', 'bullet', 'scotter'];
  ngOnInit(): void {
    // this.apiService.callingService().subscribe((res) => {
    //   this.userArr = res;
    //   console.log(this.userArr);
    // });
  }

  // fnSearch() {
  //   const filterData = this.listArr.filter((str: any) => {
  //     return str.includes('bi');
  //   });
}
