import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
// import { LoginComponent } from './components/login/login.component';
import { CompensationComponent } from './components/compensation/compensation.component';
import { DailyCountComponent } from './components/daily-count/daily-count.component';
// import { DataTableComponent } from './components/data-table/data-table.component';
import { HwcComponent } from './components/hwc/hwc.component';
import { AuthGuard } from './services/auth.guard';
import { PublicityComponent } from './components/publicity/publicity.component';
import { DatatableComponent } from './components/datatable/datatable.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
//  { path: 'login', component: LoginComponent },
  { path: 'hwc', component: HwcComponent},
  { path: 'compensation', component: CompensationComponent},
  //  { path: 'dailyCount', component: DailyCountComponent},
   { path: 'dailyCount', component: DatatableComponent},
  { path: 'publicity', component: PublicityComponent},
 // { path: 'datatable', component: DataTableComponent},
  { path: '**', redirectTo: ''}
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(appRoutes)],
providers: [],
  bootstrap: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
