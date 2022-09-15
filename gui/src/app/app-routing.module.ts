import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateJobOfferComponent} from "./pages/create-job-offer/create-job-offer.component";
import {JobOffersListComponent} from "./pages/job-offers-list/job-offers-list.component";
import {CreateCompanyComponent} from "./pages/create-company/create-company.component";
import {CompanyListComponent} from "./pages/company-list/company-list.component";
import {CompanyComponent} from "./pages/company/company.component";
import {JobOfferComponent} from "./pages/job-offer/job-offer.component";
import {EditJobOfferComponent} from "./pages/edit-job-offer/edit-job-offer.component";
import {EditCompanyComponent} from "./pages/edit-company/edit-company.component";

const routes: Routes = [
  {path: 'create-job-offer', component: CreateJobOfferComponent},
  {path: 'job-offers-list', component: JobOffersListComponent},
  {path: 'create-company', component: CreateCompanyComponent},
  {path: 'company-list', component: CompanyListComponent},
  {path: 'company/:id', component: CompanyComponent},
  {path: 'job-offer/:id', component: JobOfferComponent},
  {path: 'edit-offer/:id', component: EditJobOfferComponent},
  {path: 'edit-companies/:id', component: EditCompanyComponent},
  {path: '', redirectTo: '/company-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
