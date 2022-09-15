import {Component, OnInit} from '@angular/core';
import {FormControlName, FormGroup} from "@angular/forms";
import {CompanyService} from "../../services/company.service";
import {CreateCompanyService} from "../../services/create-company.service";
import {JobOfferModel} from "../../models/job-offer-model";
import {CompanyFormModel} from "../../models/company-form-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  public companyForm: FormGroup;
  isSubmitted = false;
  public companyNames: string[];

  constructor(private readonly companyService: CompanyService,
              private readonly createCompanyService: CreateCompanyService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.companyService.getCompanyNames()
      .subscribe(response => this.companyNames = response);
    this.companyForm = this.createCompanyService.createForm();

  }

  public createCompany(): void {
    this.companyService.createCompany(this.companyForm.value).subscribe(() => this.navigate());
  }

  private navigate() {
    this.router.navigate(['company-list']).then();
  }

  public isFormControlInValid(formControlName: string): boolean {
    return this.companyForm.controls[formControlName].invalid && this.companyForm.controls[formControlName].touched;
  }

  public hasError(formControlName: string, error: string): boolean {
    return this.companyForm.controls[formControlName].hasError(error);
  }


}
