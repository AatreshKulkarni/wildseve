import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DailyCountDataSource } from './daily-count-datasource';
import { ConnectorService } from './../../services/connector.service';

@Component({
  selector: 'app-daily-count',
  templateUrl: './daily-count.component.html',
  styleUrls: ['./daily-count.component.css']
})
export class DailyCountComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DailyCountDataSource;
  record: any;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['id', 'name'];

  displayedColumns = [
    'DC_METAINSTANCE_ID',
    'DC_DEVICE_ID',
    'DC_SIMCARD_ID',
    'DC_PHONE_NUMBER',
    'DC_CASE_ID',
    'DC_USER_NAME'
  ];

    constructor(private wildService: ConnectorService) {}

  ngOnInit() {
    this.record = this.wildService.getData();
    this.record.subscribe(res => {
      if (!res) {
        return;
      }

      this.dataSource = new DailyCountDataSource(this.paginator, this.sort, res.response);
    });
  }
}

