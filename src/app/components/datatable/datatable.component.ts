import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../../services/connector.service';

import { DataSource } from '@angular/cdk/collections';
import { Data } from '../../models/data.model';
import { Observable } from 'rxjs';


import { MatTableDataSource } from '@angular/material';

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

  constructor(private wildService: ConnectorService) { }

  ngOnInit() {
    this.record = this.wildService.getData();
    this.record.subscribe(res => {
      if (!res) {
        return;
      }
      this.dataSource = new MatTableDataSource(res.response);
    });
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
