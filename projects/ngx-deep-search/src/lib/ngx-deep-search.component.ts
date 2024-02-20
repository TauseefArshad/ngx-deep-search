import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-deep-search',
  templateUrl: './ngx-deep-search.component.html',
  styleUrls: ['./ngx-deep-search.component.css']
})
export class NgxDeepSearchComponent implements OnInit {
  @Input() placeholder: string = 'Search'
  @Input() searchFromKeys: string[] = []
  @Input() dataList: any[] = []
  @Output() resultedData: EventEmitter<any[]> = new EventEmitter();

  filteredData: any[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  onValueChange(event: any) {
    const p = event.target;
    const filterd = this.search(p.value)
    this.resultedData.emit(filterd)
  }


  search(searchValue: any) {
    const filteredData = []
    for (let i = 0; i < this.dataList.length; i++) {
      const product = this.dataList[i];
      let productProperties = this.searchFromKeys.map((key: string) => product[key]).join(',').toLowerCase();
      productProperties = productProperties.replace(/undefined/g, '');
      const searchQuery = searchValue.toLowerCase();

      const andOption: any = [];
      let stringArray2 = searchQuery.split(' ');
      if (stringArray2.length > 0) {
        stringArray2 = stringArray2.filter((i: string) => i != '');
        stringArray2.forEach((i: string) => {
          if (productProperties.indexOf(i) > -1 && i != '') {
            andOption.push('true')
          }
          else {
            andOption.push('false')
          }
        })
      }
      if (!andOption.includes('false')) {
        filteredData.push(product)
      }
    }
    return filteredData
  }


}
