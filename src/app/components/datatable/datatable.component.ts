import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../../services/connector.service';

import { DataSource } from '@angular/cdk/collections';
import { Data } from '../../models/data.model';
import { Observable } from 'rxjs';


import { MatTableDataSource, PageEvent } from '@angular/material';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  dataSource ;
  record: any;
  // displayedCol = [   'deviceid',
  //   'simserial',
  //   'phonenumber',
  //   'details',
  //   'username'];
    displayedCol = [
      'DC_METAINSTANCE_ID',
      'DC_DEVICE_ID',
      'DC_SIMCARD_ID',
      'DC_PHONE_NUMBER',
      'DC_CASE_ID',
      'DC_USER_NAME'
    ];

    totalPost = 10;
    postPerPage = 5;
    pageSizeOptions = [2, 4, 6, 8, 10];
  constructor(private wildService: ConnectorService) { }

  onChangedPage(pageData: PageEvent) {
      console.log(pageData);
  }

  ngOnInit() {
    this.record = this.wildService.getData();
    this.record.subscribe(res => {
      if (!res) {
        return;
      }
      this.dataSource = new MatTableDataSource(res.response);
    });
  }

  ConvertToCSV(objArray) {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
      let str = '';
    let row = '';

     // tslint:disable-next-line:forin
     for (const index in objArray[0]) {
         // Now convert each value to string and comma-separated
         row += index + ',';
     }
     row = row.slice(0, -1);
     // append Label row with line break
     str += row + '\r\n';

     for (let i = 0; i < array.length; i++) {
        let line = '';
         // tslint:disable-next-line:forin
         for (const index in array[i]) {
             // tslint:disable-next-line:curly
             if (line !== '') line += ',';

             line += array[i][index];
         }
         str += line + '\r\n';
     }
     return str;
 }

 download() {
  const csvData = this.ConvertToCSV(this.dataSource.data);
                         const a = document.createElement('a');
                          a.setAttribute('style', 'display:none;');
                          document.body.appendChild(a);
                         const blob = new Blob([csvData], { type: 'text/csv' });
                         const url = window.URL.createObjectURL(blob);
                          a.href = url;
                          a.download = 'Daily_count.csv'; /* your file name*/
                          a.click();
                          return 'success';
  }
}
    //   if (!res) {
    //     return;
    //   }
    //   this.dataSource = new WildDataSource(res.respo)
    // });
    // console.log(res);
    // )}



// export class WildDataSource extends DataSource<any> {
//   constructor( private wildService: ConnectorService) {
//     super();
//   }

//   connect(): Observable<Data[]> {
//     return this.wildService.getData();
//   }

//   disconnect() {}

// }
