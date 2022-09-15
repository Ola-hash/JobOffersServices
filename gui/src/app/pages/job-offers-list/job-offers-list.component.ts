import {Component, OnInit} from '@angular/core';
import {JobOfferModel} from "../../models/job-offer-model";
import {JobOfferService} from "../../services/job-offer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-job-offers-list',
  templateUrl: './job-offers-list.component.html',
  styleUrls: ['./job-offers-list.component.css']
})
export class JobOffersListComponent implements OnInit {
  public jobOffers: JobOfferModel[];


  constructor(private readonly jobOfferService: JobOfferService,
              private readonly router: Router,) {
  }

  ngOnInit(): void {
    this.jobOfferService.getJobOffers().subscribe(response => {
      this.jobOffers = response;
    });
  }

  public navigateToJobOfferDetails(id: number) {
    this.router.navigate(['job-offer/', id]).then();
  }

  public navigateToCreateOffer() {
    this.router.navigate(['create-job-offer']).then();
  }

  public navigateToCompanyList() {
    this.router.navigate(['company-list']).then();
  }
}
