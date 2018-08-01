import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { HwcDataSource } from './hwc-datasource';

import { ConnectorService } from '../../services/connector.service';

@Component({
  selector: 'app-hwc',
  templateUrl: './hwc.component.html',
  styleUrls: ['./hwc.component.css']
})
export class HwcComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: HwcDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private connectorService: ConnectorService) {}

  ngOnInit() {
    this.dataSource = new HwcDataSource(this.paginator, this.sort);
  }
}
