import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../services/company.service";
import {CompanyModel} from "../../models/company.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  public companies: CompanyModel[];

  constructor(private readonly companyService: CompanyService,
              private readonly router:Router) {
  }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(response => {
      this.companies = response;
    });
  }

  public navigateToCompanyDetails(id:number){
    this.router.navigate(['company/',id]).then();
  }

  public navigateToCreateCompany() {
    this.router.navigate(['create-company']).then();
  }

  public navigateToJobOfferList() {
    this.router.navigate(['job-offers-list']).then();
  }


}
