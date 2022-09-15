import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../../services/company.service";
import {CreateJobOfferService} from "../../services/create-job-offer.service";
import {FormGroup} from "@angular/forms";
import {JobOfferModel} from "../../models/job-offer-model";
import {JobOfferService} from "../../services/job-offer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-job-offer',
  templateUrl: './create-job-offer.component.html',
  styleUrls: ['./create-job-offer.component.css']
})
export class CreateJobOfferComponent implements OnInit {

  public companyNames: string[];
  public jobOfferForm: FormGroup;


  constructor(private readonly companyService: CompanyService,
              private readonly createJobOfferService: CreateJobOfferService,
              private readonly jobOfferService: JobOfferService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.companyService.getCompanyNames().subscribe(response => {
      this.companyNames = response
      this.jobOfferForm = this.createJobOfferService.createForm();
    });
  }

  public createJobOffer(): void {
    this.jobOfferService.createJobOffer(this.jobOfferForm.value).subscribe(() => this.navigate());
  }

  private navigate() {
    this.router.navigate(['job-offers-list']).then();
  }

  public isFormControlInValid(formControlName: string): boolean {
    return this.jobOfferForm.controls[formControlName].invalid && this.jobOfferForm.controls[formControlName].touched;
  }

  public hasError(formControlName: string, error: string): boolean {
    return this.jobOfferForm.controls[formControlName].hasError(error);
  }


}
