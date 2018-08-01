import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule,
  MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule,
  MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule, MatTabsModule,
  MatButtonToggleModule } from '@angular/material';

import { ConnectorService } from './services/connector.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user.service';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { AuthGuard } from './services/auth.guard';
import { DataTableComponent } from './components/admin/data-table.component';
// import { TabGroupAsyncExampleComponent, HomeRoutingModule } from './components/home/home-routing.module';
import { CompensationComponent } from './components/compensation/compensation.component';
import { DailyCountComponent } from './components/daily-count/daily-count.component';
import { PublicityComponent } from './components/publicity/publicity.component';
import { HwcComponent } from './components/hwc/hwc.component';
import { MaterialDashboardComponent } from './components/material-dashboard/material-dashboard.component';
import { DatatableComponent } from './components/datatable/datatable.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
import {  HomeRoutingModule } from './components/home/home-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  //  TabGroupAsyncExampleComponent,
    LoginComponent,
    MainNavComponent,
    DataTableComponent,
    CompensationComponent,
    DailyCountComponent,
    PublicityComponent,
    HwcComponent,
    MaterialDashboardComponent,
    DatatableComponent,

//    DashboardComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  HomeRoutingModule,
  MatToolbarModule,
  MatTableModule,
  HttpClientModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  LayoutModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  ReactiveFormsModule,
  MatPaginatorModule,
  MatSortModule,
  MatGridListModule,
  MatMenuModule,
  MatTabsModule,
  MatButtonToggleModule
  ],
  providers: [UserService, AuthGuard, ConnectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
