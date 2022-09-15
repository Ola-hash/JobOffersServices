import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {JobOfferService} from "../../services/job-offer.service";
import {JobOfferModel} from "../../models/job-offer-model";
import {EditJobOfferService} from "../../services/edit-job-offer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-edit-job-offer',
  templateUrl: './edit-job-offer.component.html',
  styleUrls: ['./edit-job-offer.component.css']
})
export class EditJobOfferComponent implements OnInit {
  public id: number;
  public companyNames: string[];
  public jobOfferForm: FormGroup;
  public jobOffer: JobOfferModel;
  public isSubmitted = false;


  constructor(private readonly companyService: CompanyService,
              private readonly jobOfferService: JobOfferService,
              private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly editJobOfferService: EditJobOfferService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    const idParam: string = this.route.snapshot.paramMap.get('id');
    if (idParam.match("^[\\d]+$")) {
      this.id = parseInt(idParam, 10);
      this.companyService.getCompanyNames().subscribe(response => this.companyNames = response);
      this.jobOfferService.getJobOfferById(this.id).subscribe(response => {
        this.jobOffer = response;
        this.jobOfferForm = this.editJobOfferService.editForm(this.jobOffer);
      }, error => {
        console.log(error);
      });
    } else {
      alert("Nieprawidłowy parametr id");
      this.router.navigate(['job-offers-list']).then()
    }
  }


  public editJobOffer(jobOfferModel: JobOfferModel) {
    this.isSubmitted = true;
    if (this.jobOfferForm.invalid) {
      this.jobOfferForm.markAllAsTouched();
      return;
    }
    this.jobOfferService.editJobOffer(jobOfferModel, this.id).subscribe(() => this.navigate());
  }

  public isFormControlInValid(formControlName: string): boolean {
    return this.jobOfferForm.controls[formControlName].invalid && this.jobOfferForm.controls[formControlName].touched;
  }

  public hasError(formControlName: string, error: string): boolean {
    return this.jobOfferForm.controls[formControlName].hasError(error);
  }

  public deleteJobOffer() {
    this.jobOfferService.deleteJobOffer(this.id)
      .subscribe(() => this.router.navigate(['job-offers-list']).then());
  }

  public navigate() {
    this.router.navigate(['job-offers-list']).then();
  }

}
