import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CreateJobOfferComponent} from './pages/create-job-offer/create-job-offer.component';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import {JobOffersListComponent} from './pages/job-offers-list/job-offers-list.component';
import {CompanyService} from "./services/company.service";
import {HttpClientModule} from "@angular/common/http";
import {CreateJobOfferService} from "./services/create-job-offer.service";
import {ReactiveFormsModule} from "@angular/forms";
import {JobOfferService} from "./services/job-offer.service";
import {CreateCompanyComponent} from './pages/create-company/create-company.component';
import {CreateCompanyService} from "./services/create-company.service";
import {CompanyListComponent} from './pages/company-list/company-list.component';
import {CompanyComponent} from './pages/company/company.component';
import {JobOfferComponent} from './pages/job-offer/job-offer.component';
import {EditJobOfferComponent} from './pages/edit-job-offer/edit-job-offer.component';
import {EditJobOfferService} from "./services/edit-job-offer.service";
import {EditCompanyService} from "./services/edit-company.service";
import {DatePipe} from "@angular/common";
import {EditCompanyComponent} from "./pages/edit-company/edit-company.component";


@NgModule({
  declarations: [
    AppComponent,
    CreateJobOfferComponent,
    HeaderComponent,
    JobOffersListComponent,
    CreateCompanyComponent,
    CompanyListComponent,
    CompanyComponent,
    JobOfferComponent,
    EditJobOfferComponent,
    EditCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, CompanyService, CreateJobOfferService, JobOfferService, CreateCompanyService, EditJobOfferService, EditCompanyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
