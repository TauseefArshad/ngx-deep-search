import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-deep-search',
  templateUrl: './ngx-deep-search.component.html',
  styleUrls: ['./ngx-deep-search.component.css']
})
export class NgxDeepSearchComponent implements OnInit {
  @Input() inputLabel: string = 'Search'
  @Input() searchFromKeys: any[] = []
  @Input() dataList: any[] = []
  @Output() resultedData: EventEmitter<any[]> = new EventEmitter();

  filteredData: any[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  onValueChange(event: any) {
    let p = event.target;
    let filterd = this.search(p.value)
    this.resultedData.emit(filterd)
  }


  search(searchValue: any) {
    this.filteredData = []
    for (let i = 0; i < this.dataList.length; i++) {
      const product = this.dataList[i];
      let productProperties = this.searchFromKeys.map((key: any) => product[key]).join(',').toLowerCase();
      productProperties = productProperties.replace(/undefined/g, '');
      let searchQuery = searchValue.toLowerCase();

      let andOption: any = [];
      let stringArray2 = searchQuery.split(' ');
      if (stringArray2.length > 0) {
        stringArray2 = stringArray2.filter((i: any) => i != '');
        stringArray2.forEach((i: any) => {
          if (productProperties.indexOf(i) > -1 && i != '') {
            andOption.push('true')
          }
          else {
            andOption.push('false')
          }
        })
      }
      if (!andOption.includes('false')) {
        this.filteredData.push(product)
      }
    }
    return this.filteredData
  }


}
