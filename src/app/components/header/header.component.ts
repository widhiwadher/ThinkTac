import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() btnClick = new EventEmitter();

  searchStr: any = '';
  constructor() { }

  ngOnInit(): void {

  }

  fnSearch() {
    // console.log(this.searchStr)
    this.btnClick.emit(this.searchStr);
    // this.filterName = event.target.value;
    // this.userArr = this.userArr.filter((item: any) => {
    //   return item.Name.includes(this.searchStr);
    // });
  }

  onClick() {
    this.btnClick.emit(this.searchStr);
  }
}
